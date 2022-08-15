import { ArtPanel } from "./ArtPanel";
import { MePanel } from "./MePanel";
import { WorksPanel } from "./WorksPanel";
import "../../styles/PanelStackStyle.css";
import { IPanelStack } from "../interfaces/IPanelStack";

export function PanelStack({ currentPanelId }: IPanelStack) 
{
    function isPanelEnabled(id: number): boolean {
        return id === currentPanelId;
    }

    return (
        <div className="panel-stack">
            <MePanel enabled={isPanelEnabled(0)}/>
            <WorksPanel enabled={isPanelEnabled(1)}/>
            <ArtPanel enabled={isPanelEnabled(2)}/>
        </div>
    );
}
