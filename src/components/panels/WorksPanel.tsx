import { IProjectStackContent } from "../interfaces/IProjectStackContent";
import { MainHeading } from "../texts/MainHeading";
import { ProjectStack } from "../works/ProjectStack";
import githubIcon from "../../icon/GitHub-Mark-Light-64px.png"
import { IPanel } from "../interfaces/IPanel";
import "../../styles/WorksPanelStyle.css";
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';

export function WorksPanel({enabled} : IPanel) 
{
    const MAIN_HEADING = "WORKS";
    const PROJECT_LINKED_ICON_CLASS_OVERRIDE = "project-linked-icon";
    const WORKS: IProjectStackContent = {
        projects: [
            {
                name: "rain",
                description: "2D game engine for creating games where every pixel is simulated!",
                techStack: {
                    techs: ["C++", "SDL2"]
                },
                linkedIcon: {
                    link: "https://github.com/jaks024/rain",
                    imageSrc: githubIcon,
                    alt: "https://github.com/jaks024/rain",
                    styleClassOverride: PROJECT_LINKED_ICON_CLASS_OVERRIDE
                }
            }, 
            {
                name: "mflow",
                description: "A spreadsheet-like web app used for tracking income and expense.",
                techStack: {
                    techs: ["React", "JavaScript", "Express", "Google Drive API V3", "Heroku"]
                },
                linkedIcon: {
                    link: "https://github.com/jaks024/mflow",
                    imageSrc: githubIcon,
                    alt: "https://github.com/jaks024/mflow",
                    styleClassOverride: PROJECT_LINKED_ICON_CLASS_OVERRIDE
                }
            }, 
            {
                name: "this website",
                description: "A website to display all of my works.",
                techStack: {
                    techs: ["React", "TypeScript", "HTML", "CSS"]
                },
                linkedIcon: {
                    link: "https://github.com/jaks024/jaks024.github.io",
                    imageSrc: githubIcon,
                    alt: "https://github.com/jaks024/jaks024.github.io",
                    styleClassOverride: PROJECT_LINKED_ICON_CLASS_OVERRIDE
                }
            }, 
            {
                name: "twit-media-gallery",
                description: "Electron desktop app to amass, view, and organize tweet media attachments from multiple Twitter users",
                techStack: {
                    techs: ["Electron", "HTML", "CSS", "JavaScript", "Twitter API V2"]
                },
                linkedIcon: {
                    link: "https://github.com/jaks024/twit-media-gallery",
                    imageSrc: githubIcon,
                    alt: "https://github.com/jaks024/twit-media-gallery",
                    styleClassOverride: PROJECT_LINKED_ICON_CLASS_OVERRIDE
                }
            }, 
            {
                name: "my-todo-list",
                description: "Implementation of Google Calendar day view as a to-do list with scalable UI based on time",
                techStack: {
                    techs: ["Electron", "HTML", "CSS", "JavaScript"]
                },
                linkedIcon: {
                    link: "https://github.com/jaks024/my-todo-list",
                    imageSrc: githubIcon,
                    alt: "https://github.com/jaks024/my-todo-list",
                    styleClassOverride: PROJECT_LINKED_ICON_CLASS_OVERRIDE
                }
            }, 
            {
                name: "osu! Song Player",
                description: "A music organizer and player to aggregate and play songs from the rhythm game called osu!.",
                techStack: {
                    techs: ["WPF", "C#", "CSCore"]
                },
                linkedIcon: {
                    link: "https://github.com/jaks024/osu-song-player",
                    imageSrc: githubIcon,
                    alt: "https://github.com/jaks024/osu-song-player",
                    styleClassOverride: PROJECT_LINKED_ICON_CLASS_OVERRIDE
                }
            }, 
            {
                name: "Minesweeper Multiplayer",
                description: "Versus your friends online in a head to head classic Minesweeper battle for the fastest clear time.",
                techStack: {
                    techs: ["Unity", "C#", "Pun"]
                },
                linkedIcon: {
                    link: "https://jaks.itch.io/minesweeper-multiplayer",
                    imageSrc: githubIcon,
                    alt: "https://jaks.itch.io/minesweeper-multiplayer",
                    styleClassOverride: PROJECT_LINKED_ICON_CLASS_OVERRIDE
                }
            }, 
            {
                name: "My Watch List",
                description: "An Android app that allows you to keep track of your entertainment (1500+ downloads on Google Play Store).",
                techStack: {
                    techs: ["Android Studio", "Java"]
                },
                linkedIcon: {
                    link: "https://play.google.com/store/apps/details?id=com.jy.mywatchlist&hl=en_CA",
                    imageSrc: githubIcon,
                    alt: "https://play.google.com/store/apps/details?id=com.jy.mywatchlist&hl=en_CA",
                    styleClassOverride: PROJECT_LINKED_ICON_CLASS_OVERRIDE
                }
            }, 
        ]
    };

    return (
        <div className={"work-panel panel "+ (enabled ? "panel-enabled" : "panel-disabled")}>
            <MainHeading text={MAIN_HEADING}/>
            <SimpleBar style={{ height: "calc(100% - 90px" }}>
                <ProjectStack projects={WORKS.projects}/>
            </SimpleBar>
        </div>
    );
}
