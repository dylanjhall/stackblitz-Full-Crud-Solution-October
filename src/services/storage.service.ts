import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  set(key: string, data: any, expiry: number = 5 * 60 * 1000): void {
    const timestamp = new Date( Date.now());
    const payload = {
      data,
      expiry: Date.now() + expiry,
      created: timestamp
    };
    localStorage.setItem(key, JSON.stringify(payload));
  }

  get(key: string): any {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = Date.now();
    if (now > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.data;
  }
}
