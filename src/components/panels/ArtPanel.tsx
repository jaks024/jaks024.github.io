import { IPanel } from "../interfaces/IPanel";
import { MainHeading } from "../texts/MainHeading";
import { SubHeading } from "../texts/SubHeading";
import "../../styles/ArtPanelStyle.css";
import { Paragraph } from "../texts/Paragraph";

export function ArtPanel({enabled} : IPanel) 
{
    const MAIN_HEADING = "ART"
    const PLACEHOLDER = "COMING SOON!";
    const CREDIT = "https://www.pixiv.net/en/artworks/76542723"

    return (
        <div className={"art-panel panel " + (enabled ? "panel-enabled" : "panel-disabled")}>
            <MainHeading text={MAIN_HEADING}/>
            <SubHeading text={PLACEHOLDER} />
            <Paragraph text="Background by:" />
            <a className="link"  href={CREDIT} target="_blank" rel="noreferrer" >
                Rella
            </a>
        </div>
    );
}
