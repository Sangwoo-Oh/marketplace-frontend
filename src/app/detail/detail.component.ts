import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ItemService } from '../service/item.service';
import { Observable } from 'rxjs';
import { Item } from '../interface/item';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../common/header/header.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  item!: Item;
  itemService: ItemService = inject(ItemService);
  route: ActivatedRoute = inject(ActivatedRoute);
  user: any;
  constructor() {
    this.user = JSON.parse(localStorage.getItem("app-meta") || 'null') || {user_id : "", username : "", exp : 0 };
    const id = this.route.snapshot.params['id'];
    this.itemService.getItemById(id).subscribe((data)=>{
      this.item = data;
    });
  }
}
