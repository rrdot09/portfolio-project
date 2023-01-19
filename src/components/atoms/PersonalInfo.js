import Education from "../molecules/Education";
import jsonData from "../../data/data.json";
import Awards from "../molecules/Awards";
import Experience from "../molecules/Experience";

export default function PersonalInformation() {
  return (
    <>
      <div className="info u-mb-60">
        <h3 className="info_header u-mb-20">EDUCATION</h3>
        {jsonData[1].aboutPage[0].schools.map((item) => {
          return <Education data={item} />;
        })}
      </div>

      <div className="info u-mb-60">
        <h3 className="info_header u-mb-20">AWARDS</h3>
        {jsonData[1].aboutPage[1].awards.map((item) => {
          return <Awards data={item} />;
        })}
      </div>

      <div className="info u-mb-60">
        <h3 className="info_header u-mb-20">EXPERIENCE</h3>
        {jsonData[1].aboutPage[2].experience.map((item) => {
          return <Experience data={item} />;
        })}
      </div>
    </>
  );
}
