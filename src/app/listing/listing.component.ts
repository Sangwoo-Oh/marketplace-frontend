import { Component, inject } from '@angular/core';
import { Item } from '../interface/item';
import { ItemService } from '../service/item.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})

export class ListingComponent {
  delay = false;
  items!: Item[];
  itemService:ItemService = inject(ItemService);
  constructor() {
    this.itemService.getItems().subscribe((data) => {
      // this.items = data;
    });
    setTimeout(() => {
      if (!this.items) {
        this.delay = true;
      }
    }, 1500);
  }
}
