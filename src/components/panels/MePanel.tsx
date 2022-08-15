import { MainHeading } from "../texts/MainHeading";
import { Paragraph } from "../texts/Paragraph";
import { SubHeading } from "../texts/SubHeading";
import { IPanel } from "../interfaces/IPanel";
import "../../styles/MePanelStyle.css";
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';

export function MePanel({enabled} : IPanel) 
{
    const MAIN_HEADING = "JACKSON YE";
    const GREETING = `Hi there! 👋`;

    const SELF_INTRO = `${"\n\n"}Thanks for visiting my page!${"\n\n"}Here contains my resume, personal projects, and artworks. It’d make my day if you could check them out! 😊${"\n\n"}I’m currently a 3rd year student at the University of Waterloo majoring in Computational Mathematics with minors in Computing and Combinatorics & Optimization. 👨‍🎓 ${"\n\n"}In my free time, I enjoy working on personal projects, drawing, cooking, working out, reading, hanging out with friends, going on walks, watching anime & k-dramas, gaming, learning new things, and many more! 😎${"\n\n"}Feel free to shoot me a message about anything via any of the contact below. I’d love to meet and chat with you! 😄${"\n\n"}`;

    return (
        <div className={"me-panel panel " + (enabled ? "panel-enabled" : "panel-disabled")}>
            <MainHeading text={MAIN_HEADING}/>
            <SubHeading text={GREETING}/>
            <SimpleBar style={{ height: "calc(100% - 180px", paddingRight: "10px" }}>
                <Paragraph text={SELF_INTRO}/>
            </SimpleBar>
        </div>
    );
}
