import PictureSize from "../atoms/PictureSize";
import Title from "../atoms/Title";
import jsonData from "../../data/data.json";

export default function NavigationBar() {
  return (
    <>
      <div className="landing-page-container">
        <PictureSize />
        <Title
          title={jsonData[0].landingPage[0].title}
          content={jsonData[0].landingPage[0].content}
        />
      </div>
    </>
  );
}
