import jsonData from "../../data/data.json";

export default function Title() {
  return (
    <div className="card-tools">
      {jsonData[2].projectsPage.map((project, index) => {
        return (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.tools}</p>
          </div>
        );
      })}
    </div>
  );
}
