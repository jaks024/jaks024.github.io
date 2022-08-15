import { LinkedIcon } from "../contact/LinkedIcon";
import { IProjectContent } from "../interfaces/IProjectContent";
import { Paragraph } from "../texts/Paragraph";
import { SubHeading } from "../texts/SubHeading";
import { TechStack } from "./TechStack";

export function Project({name, description, techStack, linkedIcon} : IProjectContent) 
{
    return (
        <div className="project">
            <div className="project-heading">
                <LinkedIcon 
                    link={linkedIcon.link}
                    imageSrc={linkedIcon.imageSrc}
                    alt={linkedIcon.alt}
                    styleClassOverride={linkedIcon.styleClassOverride}/>
                <SubHeading text={name} />
            </div>
            <Paragraph text={description} />
            <TechStack techs={techStack.techs} />
        </div>
    );
}
