import { ITechContent } from "../interfaces/ITechContent";
import { TechBubble } from "./TechBubble";


export function TechStack({techs} : ITechContent) 
{

    function generateTechBubbles(techContents : string[])
    {
        return techContents.map((name) => (
            <TechBubble text={name} />
        ));
    }

    return (
        <div className="tech-stack">
            {generateTechBubbles(techs)}
        </div>
    );
}
