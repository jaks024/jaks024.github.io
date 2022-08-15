import { IProjectContent } from "../interfaces/IProjectContent";
import { IProjectStackContent } from "../interfaces/IProjectStackContent";
import { Project } from "./Project";

export function ProjectStack({projects} : IProjectStackContent) 
{
    function generateProjects(contents: IProjectContent[])
    {
        return contents.map((content) => (
            <Project 
                name={content.name}
                description={content.description}
                techStack={content.techStack}
                linkedIcon={content.linkedIcon}
            />
        ));
    }

    return (
        <div className="project-stack">
            {generateProjects(projects)}
        </div>
    );
}
