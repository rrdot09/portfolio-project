import ProjectButton from "../atoms/Project_Button";
import ProjectTools from "../atoms/Project_Tools";
import ProjectTitle from "../atoms/Project_Title";

export default function Card() {
  return (
    <div className="card-container">
      <ProjectTitle />
      <div className="card-body">
        <ProjectTools />
        <ProjectButton />
      </div>
    </div>
  );
}
