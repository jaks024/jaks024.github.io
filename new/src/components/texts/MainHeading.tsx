import { ITextContent } from "../interfaces/ITextContent";
import "../../styles/Texts.css";

export function MainHeading({text} :ITextContent) 
{
    return (
        <div className="main-heading">
            {text}
        </div>
    );
}
