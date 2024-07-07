import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../common/header/header.component';
import { ItemService } from '../service/item.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Item } from '../interface/item';
import { PurchaseService } from '../service/purchase.service';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [RouterLink, CommonModule, HeaderComponent],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.scss'
})
export class PurchaseComponent {
  itemService: ItemService = inject(ItemService);
  purchaseService: PurchaseService = inject(PurchaseService);
  route: ActivatedRoute = inject(ActivatedRoute);
  item!: Item;
  purchaseClicked: boolean = false;
  purchaseCompleted: boolean = false;
  purchaseFailed: boolean = false;
  constructor() {
    const id = this.route.snapshot.params['id'];
    this.itemService.getItemById(id).subscribe((data)=>{
      this.item = data;
    });
    this.purchaseClicked = false;
    this.purchaseCompleted = false;
    this.purchaseFailed = false;
  }

  purchase(){
    this.purchaseClicked = true;
    const data = {
      itemId: this.route.snapshot.params['id'],
    }
    this.purchaseService.purchaseItem(data).subscribe({
      next: (data)=>{
        console.log(data);
        this.purchaseCompleted = true;
      },
      error: (err) =>{
        console.log(err);
        this.purchaseFailed = true;
      }
    });
  }

  modalTest() {
    this.purchaseClicked = true;
    setTimeout(()=>{
      // this.purchaseCompleted = true;
      // this.purchaseFailed = true;
    }, 2000);
  }
}
