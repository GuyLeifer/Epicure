import { Card } from "./card";

export interface Chef {
    name: string;
    image: string;
    content: string;
    cards: Card[];
}