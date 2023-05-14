import { MainHeading } from "../texts/MainHeading";
import { Paragraph } from "../texts/Paragraph";
import { SubHeading } from "../texts/SubHeading";
import { IPanel } from "../interfaces/IPanel";
import "../../styles/MePanelStyle.css";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { useEffect, useState } from "react";

export function MePanel({ enabled }: IPanel) {
  const MAIN_HEADING = "JACKSON YE";
  const GREETING = `Hi there! 👋`;

  const SELF_INTRO = `${"\n"}Thanks for visiting my page!
    ${"\n"}Here contains my resume, personal projects, and artworks. Feel free to check them out!
    ${"\n"}I’m currently a 3rd year student (3B) at the University of Waterloo majoring in Computational Mathematics with minors in Computing and Combinatorics & Optimization. 
    ${"\n"}Current main hobbies/focus: working out, drawing, and working on refern. (check it out in project section!) ${"\n"}Other hobbies: chess, reading, bouldering, cooking, gaming, and learning languages (Japanese currently)${"\n"}Want to (in the future): learn piano/guitar, learn singing, learn dancing, and learn Korean  
    ${"\n"}Feel free to shoot me a message about anything via any of the contact below. I'm down to chat about anything! 😄${"\n\n"}`;

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 649;
  const isPortrait = width < 400;

  return (
    <div
      className={
        "me-panel panel " + (enabled ? "panel-enabled" : "panel-disabled")
      }
    >
      <MainHeading text={MAIN_HEADING} />
      <SubHeading text={GREETING} />
      <SimpleBar
        style={{
          height: `calc(100% - ${
            isMobile ? (isPortrait ? "150px" : "100px") : "200px"
          })`,
          paddingRight: "10px",
          boxSizing: "border-box",
        }}
      >
        <Paragraph text={SELF_INTRO} />
      </SimpleBar>
    </div>
  );
}
