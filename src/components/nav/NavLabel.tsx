import { INavLabel } from "../interfaces/INavLabel";


export function NavLabel({text, linkedPanelId, isSelected, onClickLabel}: INavLabel) 
{
    return (
        <div className={`nav-label ${isSelected ? "nav-label-selected" : "nav-label-deselected"}`}
            onClick={() => onClickLabel(linkedPanelId)}>
            {text}
        </div>
    );
}
