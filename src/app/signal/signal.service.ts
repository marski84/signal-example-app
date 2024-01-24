import {Injectable, Signal, signal, WritableSignal} from '@angular/core';

interface StoreItem {
  id: string;
  name: string;
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  #exampleStore: WritableSignal<StoreItem[]> = signal ([
    {id: new Date().toString(), name: 'example 1', description: 'smth'},
    {id: new Date().toString(), name: 'example 2', description: 'smth 2'}
  ]);

  items = this.#exampleStore.asReadonly();

  addItem(item: StoreItem) {
    this.#exampleStore.update(storeItems =>
    [
        ...storeItems,
        item
    ])
  }

  constructor() { }
}
