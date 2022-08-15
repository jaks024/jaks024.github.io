import { ITextContent } from "../interfaces/ITextContent";
import "../../styles/Texts.css";

export function SubHeading({text} : ITextContent) 
{
    return (
        <div className="sub-heading">
            {text}
        </div>
    );
}
