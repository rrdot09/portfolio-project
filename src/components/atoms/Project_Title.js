import cardData from '../../card.json';


export default function Title() {
  return (
    <div className="card-header">
      <h2>{cardData[0].projectsPage[0].title}</h2>
    </div>
  );
}
