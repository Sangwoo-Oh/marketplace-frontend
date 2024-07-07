import { Category } from "./category";
import { User } from "./user";

export interface Item {
    _id: string;
    public_date: Date;
    name: string;
    seller: User;
    category: Category;
    description: string;
    price: number;
    image_url: string;
    is_purchased: boolean;
}
