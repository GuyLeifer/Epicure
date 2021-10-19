export interface Card {
    title?: string;
    image?: string;
    subTitle?: string;
    content?: string;
    subIcon?: string;
    price?: number;
    isIcon?: boolean;
    icon?: string;
}

export interface Cards {
    title: string;
    cards?: Card[];
    link?: string;
    meaning?: boolean;
}