import { TypeTecnologies } from "../tecnologies/object-tecnologies";
export interface InterfaceProject {
    title: string;
    content: string;
    link: string;
    tecnologies: TypeTecnologies[];
}
export interface InterfaceProjectStyles extends InterfaceProject{
    img: string;
    color: string;
    background: string;
}