import { ITextContent } from "../interfaces/ITextContent";

export function TechBubble({text} : ITextContent) 
{
    return (
        <div className="tech-bubble">
            <div className="tech-bubble-content">
                {text}
            </div>
        </div>
    );
}
