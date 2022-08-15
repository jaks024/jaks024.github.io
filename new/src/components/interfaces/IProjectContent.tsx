import { ILinkedIconContent } from "./ILinkedIconContent";
import { ITechContent } from "./ITechContent";

export interface IProjectContent{
    name: string;
    description: string;
    techStack: ITechContent;
    linkedIcon: ILinkedIconContent;
}