import jsonData from "../../data/data.json";

export default function Tools() {
  return (
    <div className="card">
      {jsonData[2].projectsPage.map((project, index) => {
        return (
          <div key={index} className="card-tools">
            <p>{project.tools}</p>
          </div>
        );
      })}
    </div>
  );
}
