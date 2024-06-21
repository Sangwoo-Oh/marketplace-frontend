import { Injectable } from '@angular/core';
import { Item } from '../interface/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor() { }

  getItems():Item[] {
    return items;
  }
}


const items: Item[] = [
  {
    _id: '1',
    public_date: new Date(2024/1/1),
    name: 'test_item',
    category: 'test_category',
    description: 'test_description',
    price: 1000,
    image_url: 'assets/placeholder.jpeg',
  },
  {
    _id: '2',
    public_date: new Date(2024/1/1),
    name: 'test_item',
    category: 'test_category',
    description: 'test_description',
    price: 1000,
    image_url: 'assets/placeholder.jpeg'
  },
  {
    _id: '3',
    public_date: new Date(2024/1/1),
    name: 'test_item',
    category: 'test_category',
    description: 'test_description',
    price: 1000,
    image_url: 'assets/placeholder.jpeg'
  },
  {
    _id: '4',
    public_date: new Date(2024/1/1),
    name: 'test_item',
    category: 'test_category',
    description: 'test_description',
    price: 1000,
    image_url: 'assets/placeholder.jpeg'
  },
]


