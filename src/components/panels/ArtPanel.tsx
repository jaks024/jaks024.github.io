import { IPanel } from "../interfaces/IPanel";
import { MainHeading } from "../texts/MainHeading";
import { SubHeading } from "../texts/SubHeading";
import "../../styles/ArtPanelStyle.css";
import { Paragraph } from "../texts/Paragraph";
import { ArtImage } from "../art/ArtImage";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

export function ArtPanel({ enabled }: IPanel) {
  const MAIN_HEADING = "ART";
  const CREDIT =
    "https://pbs.twimg.com/media/FrqewZjaAAA9zRM?format=jpg&name=large";

  const commissions = [
    "https://storage.googleapis.com/art-imgs/art/miku-nice-boat.jpg",
    "https://storage.googleapis.com/art-imgs/art/ahri-pool-party.jpg",
    "https://storage.googleapis.com/art-imgs/art/4-jan6.jpg",
    "https://storage.googleapis.com/art-imgs/art/142-dec30.jpg",
    "https://storage.googleapis.com/art-imgs/art/nyancatv4.jpg",
    "https://storage.googleapis.com/art-imgs/art/84-comms-chompy-character.jpg",
  ];

  const renderImage = (links: string[]) => {
    return links.map((url) => {
      const alt = url.substring(url.lastIndexOf("/"));
      return <ArtImage key={url} src={url} alt={alt} />;
    });
  };

  const Commissions = () => {
    return <div className="art-container">{renderImage(commissions)}</div>;
  };

  return (
    <div
      className={
        "art-panel panel " + (enabled ? "panel-enabled" : "panel-disabled")
      }
    >
      <MainHeading text={MAIN_HEADING} />
      <SimpleBar style={{ height: "calc(100% - 80px)" }}>
        <Commissions />
        <br />
        <Paragraph text="Website background by:" />
        <a className="link" href={CREDIT} target="_blank" rel="noreferrer">
          loundraw
        </a>
        <br />
        <br />
      </SimpleBar>
    </div>
  );
}
