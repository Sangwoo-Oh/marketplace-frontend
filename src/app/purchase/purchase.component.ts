import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../common/header/header.component';
import { ItemService } from '../service/item.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../interface/item';
import { PurchaseService } from '../service/purchase.service';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.scss'
})
export class PurchaseComponent {
  itemService: ItemService = inject(ItemService);
  purchaseService: PurchaseService = inject(PurchaseService);
  route: ActivatedRoute = inject(ActivatedRoute);
  item!: Item;
  purchaseCompleted: boolean = false;
  constructor() {
    const id = this.route.snapshot.params['id'];
    this.itemService.getItemById(id).subscribe((data)=>{
      this.item = data;
    });
  }

  purchase(){
    const data = {
      itemId: this.route.snapshot.params['id'],
    }
    this.purchaseService.purchaseItem(data).subscribe((data)=>{
      console.log(data);
      this.purchaseCompleted = true;
    });
  }
}
