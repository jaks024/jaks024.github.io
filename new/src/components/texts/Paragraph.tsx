import { ITextContent } from "../interfaces/ITextContent";
import "../../styles/Texts.css";

export function Paragraph({text} : ITextContent) 
{
    return (
        <div className="paragraph">
            {text}
        </div>
    );
}
