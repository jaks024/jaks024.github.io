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
  const CREDIT = "https://www.pixiv.net/en/artworks/76542723";

  const commissions = [
    "https://storage.googleapis.com/art-imgs/commissions/nyancat.webp",
    "https://storage.googleapis.com/art-imgs/commissions/chompy.webp",
  ];

  const contests = [
    "https://storage.googleapis.com/art-imgs/contests/winter22.webp",
    "https://storage.googleapis.com/art-imgs/contests/halloween22.webp",
    "https://storage.googleapis.com/art-imgs/contests/summer22.webp",
    "https://storage.googleapis.com/art-imgs/contests/winter21.webp",
    "https://storage.googleapis.com/art-imgs/contests/halloween21.webp",
    "https://storage.googleapis.com/art-imgs/contests/summer21.webp",
    "https://storage.googleapis.com/art-imgs/contests/spring21.webp",
  ];

  const studies = [
    "https://storage.googleapis.com/art-imgs/studies/48-apr23.webp",
    "https://storage.googleapis.com/art-imgs/studies/47-apr21.webp",
    "https://storage.googleapis.com/art-imgs/studies/38-apr8.webp",
    "https://storage.googleapis.com/art-imgs/studies/30-mar25.webp",
    "https://storage.googleapis.com/art-imgs/studies/23-feb10.webp",
    "https://storage.googleapis.com/art-imgs/studies/81-nov20.webp",
    "https://storage.googleapis.com/art-imgs/studies/57-aug7.webp",
    "https://storage.googleapis.com/art-imgs/studies/53-jul19.webp",
    "https://storage.googleapis.com/art-imgs/studies/52-jul13.webp",
    "https://storage.googleapis.com/art-imgs/studies/49-jul7.webp",
    "https://storage.googleapis.com/art-imgs/studies/48-jul4.webp",
    "https://storage.googleapis.com/art-imgs/studies/44-jun21.webp",
    "https://storage.googleapis.com/art-imgs/studies/43-jun20.webp",
    "https://storage.googleapis.com/art-imgs/studies/42-jun15.webp",
    "https://storage.googleapis.com/art-imgs/studies/33-jun2.webp",
    "https://storage.googleapis.com/art-imgs/studies/32-may26.webp",
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

  const Contests = () => {
    return <div className="art-container">{renderImage(contests)}</div>;
  };

  const Studies = () => {
    return <div className="art-container">{renderImage(studies)}</div>;
  };

  return (
    <div
      className={
        "art-panel panel " + (enabled ? "panel-enabled" : "panel-disabled")
      }
    >
      <MainHeading text={MAIN_HEADING} />
      <SimpleBar style={{ height: "calc(100% - 80px)" }}>
        <SubHeading text="Commissions" />
        <Commissions />
        <br />
        <SubHeading text="Contests" />
        <Contests />
        <br />
        <SubHeading text="Studies" />
        <Studies />
        <br />
        <Paragraph text="Website background by:" />
        <a className="link" href={CREDIT} target="_blank" rel="noreferrer">
          Rella
        </a>
        <br />
        <br />
      </SimpleBar>
    </div>
  );
}
