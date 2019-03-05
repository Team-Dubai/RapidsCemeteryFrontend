import { Tag } from './tag';

export class Item {
    category: string;
    id: number;
    name: string;
    description: string;
    image: string;
    images: string[];
    media: string;
    dateOfBirth: string;
    dateOfDeath: string;
    notes: string;
    placeOfBirth: string;
    placeOfDeath: string;
    plot: string;
    veteranInformation: string;
    tags: Tag[];
}