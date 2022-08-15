import { ILinkedIconContent } from "../interfaces/ILinkedIconContent";

export function LinkedIcon({link, imageSrc, alt, styleClassOverride} : ILinkedIconContent) 
{
    return (
        <div className={`linked-icon ${styleClassOverride}`}>
            <a href={link} target="_blank">
                <img src={imageSrc} alt={alt}/>
            </a>
        </div>
    );
}
