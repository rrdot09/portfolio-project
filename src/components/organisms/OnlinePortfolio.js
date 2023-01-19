import PictureSize from "../atoms/PictureSize";
import Title from "../atoms/Title";
import jsonData from "../../data/data.json";

export default function NavigationBar() {
  return (
    <>
      <div className="landing-page-container">
        <PictureSize />
        {jsonData[0].landingPage.map((item) => {
          return <Title content={item.content} title={item.title} />;
        })}
      </div>
    </>
  );
}
