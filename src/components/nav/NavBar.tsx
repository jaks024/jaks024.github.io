import { NavLabel } from "./NavLabel";
import "../../styles/NavBarStyle.css";
import { INavBar } from "../interfaces/INavBar";
import { useState } from "react";

export function NavBar({onChangePanel}: INavBar) 
{
    const [currentLabel, setCurrentLable] = useState(0);

    const isCurrentLabel = (id: number) => {
        return currentLabel === id;
    }

    const openResume = (url: string) => {
        window.open(url, '_blank')?.focus();
    };

    const selectLabel = (id: number) => {
        setCurrentLable(id);
        onChangePanel(id);
    }

    return (
        <div className="nav-bar">
            <NavLabel 
                text="ME"
                linkedPanelId={0}
                isSelected={isCurrentLabel(0)}
                onClickLabel={selectLabel}
            />
            <NavLabel 
                text="WORKS"
                linkedPanelId={1}
                isSelected={isCurrentLabel(1)}
                onClickLabel={selectLabel}
            />
            <NavLabel 
                text="ART"
                linkedPanelId={2}
                isSelected={isCurrentLabel(2)}
                onClickLabel={selectLabel}
            />
            <NavLabel 
                text="RESUME"
                linkedPanelId={3}
                isSelected={isCurrentLabel(3)}
                onClickLabel={() => openResume("https://drive.google.com/file/d/1fUqV8VwApD4f0iPGMPxwE1H6NvN05BVG/view?usp=sharing")}
            />
        </div>
    );
}
