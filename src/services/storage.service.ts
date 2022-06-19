export class StorageService {

  constructor() {}

  public static setData(key: string, value: string): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static getData(key: string): string {
    const data = localStorage.getItem(key);

    if (!data) return '';

    return JSON.parse(data);
  }

}