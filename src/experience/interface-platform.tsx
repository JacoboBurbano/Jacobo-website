interface InterfacePlatform {
    img: string;
    name: string;
    content: string;
    links: InterfaceLinkPlatform[];
}
interface InterfaceLinkPlatform {
    link: string;
    alias: string
}
export interface InterfacePlatformStyles extends InterfacePlatform{
    background: string;
    color: string;
}