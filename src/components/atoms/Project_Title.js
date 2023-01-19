import jsonData from "../../data/data.json";

export default function Title() {
  return (
    <div className="card-header">
      {jsonData[2].projectsPage.map((project, index) => {
        return (
          <div key={index}>
            <h2>{project.title}</h2>
          </div>
        );
      })}
    </div>
  );
}
