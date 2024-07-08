import { Component, inject } from '@angular/core';
import { User } from '../interface/user';
import { AuthService } from '../service/auth.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../common/header/header.component';
import { ItemService } from '../service/item.service';
import { Item } from '../interface/item';
import { PurchaseService } from '../service/purchase.service';

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './my-page.component.html',
  styleUrl: './my-page.component.scss'
})
export class MyPageComponent {
  authService: AuthService = inject(AuthService);
  itemService: ItemService = inject(ItemService);
  purchaseService: PurchaseService = inject(PurchaseService);
  listingItems!: Item[];
  purchasedItems!: Item[];
  user: any;
  constructor() {
    this.user = JSON.parse(localStorage.getItem("app-meta") || 'null') || {user_id : "", username : "", exp : 0 };
    this.itemService.getItemsByUserId(this.user.user_id).subscribe(
      (data) => {
        this.listingItems = data;
      }
    );
    this.purchaseService.getPurchasedItems().subscribe(
      (data) => {
        this.purchasedItems = data;
      }
    );
  }
}
