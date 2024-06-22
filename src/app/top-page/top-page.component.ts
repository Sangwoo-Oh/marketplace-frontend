import { Component, inject } from '@angular/core';
import { Item } from '../interface/item';
import { ItemService } from '../service/item.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './top-page.component.html',
  styleUrl: './top-page.component.scss'
})

export class TopPageComponent {
  items:Observable<Item[]>;
  itemService:ItemService = inject(ItemService);
  constructor() {
    this.items = this.itemService.getItems();
  }
}
