import { IPanel } from "../interfaces/IPanel";
import { MainHeading } from "../texts/MainHeading";
import { SubHeading } from "../texts/SubHeading";
import "../../styles/ArtPanelStyle.css";

export function ArtPanel({enabled} : IPanel) 
{
    const MAIN_HEADING = "ART"
    const PLACEHOLDER = "COMING SOON!";

    return (
        <div className={"art-panel panel " + (enabled ? "panel-enabled" : "panel-disabled")}>
            <MainHeading text={MAIN_HEADING}/>
            <SubHeading text={PLACEHOLDER} />
        </div>
    );
}
