import { SocialNetworks } from "./SocialNetworks"

export const Contact = ({img, link}: {img:string, link:string}) => {
    return (
        <a href={link}>
            <img src={img}/>
        </a>
    )
}
const ContactPage = () => {
    return (
        <div>
            <h3>Contact me!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat iste totam molestias cumque veritatis natus est nam sint accusamus velit, libero iure dolorem dolores corrupti dolor modi, officiis, qui nemo!</p>
            <SocialNetworks/>
        </div>
    )
}