import { Category } from "./category";

export interface Item {
    _id: string;
    public_date: Date;
    name: string;
    category: Category;
    description: string;
    price: number;
    image_url: string;
}
