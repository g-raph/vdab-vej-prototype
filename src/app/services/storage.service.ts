import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, value: any): void {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
  }

  getItem(key: string) {
    const jsonData = localStorage.getItem(key);
    return jsonData;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
  
}
