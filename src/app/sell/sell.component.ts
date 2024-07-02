import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../service/item.service';
import { CategoryService } from '../service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.scss'
})
export class SellComponent {
  itemService:ItemService = inject(ItemService);
  categoryService:CategoryService = inject(CategoryService);
  router:Router = inject(Router);
  file: File | null = null;
  categories;
  model = {
    name:"",
    description:"",
    category:"",
    price:"",
  }
  constructor() {
    this.categories = this.categoryService.getCategories();
  }
  onChange(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.file = file;
    }
  }

  registerItem() {
    if (this.file) {
      const formData = new FormData();

      formData.append('name', this.model.name);
      formData.append('description', this.model.description);
      formData.append('category', this.model.category);
      formData.append('price', this.model.price);
      formData.append('file', this.file, this.file.name);

      this.itemService.createItem(formData).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (error: any) => {
          return console.error(error);
        },
      });
    }
  }

}
