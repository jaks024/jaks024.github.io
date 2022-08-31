import { LinkedIcon } from "./LinkedIcon";
import githubIcon from "../../icon/GitHub-Mark-Light-64px.png";
import linkedinIcon from "../../icon/linkedin.svg";
import emailIcon from "../../icon/gmail.webp";
import "../../styles/LinkedIconBarStyle.css";

export function LinkedIconBar() 
{
    return (
        <div className="linked-icon-bar">
            <LinkedIcon 
                link="mailto:jackson.ye@uwaterloo.ca"
                imageSrc={emailIcon}
                alt="mailto:jackson.ye@uwaterloo.ca"
                styleClassOverride="email-icon"
            />
            <LinkedIcon 
                link="https://www.linkedin.com/in/jacksonn-ye/"
                imageSrc={linkedinIcon}
                alt="https://www.linkedin.com/in/jacksonn-ye/"
                styleClassOverride=""
            />
            <LinkedIcon 
                link="https://github.com/jaks024/"
                imageSrc={githubIcon}
                alt="https://github.com/jaks024/"
                styleClassOverride="bar-github-icon"
            />
        </div>
    );
}
