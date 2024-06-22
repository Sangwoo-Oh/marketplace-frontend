import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ItemService } from '../service/item.service';
import { Observable } from 'rxjs';
import { Item } from '../interface/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  item!: Item;
  itemService: ItemService = inject(ItemService);
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor() {
    const id = this.route.snapshot.params['id'];
    this.itemService.getItemById(id).subscribe((data)=>{
      this.item = data;
    });
  }
}
