import cardData from '../../card.json';


export default function Tools() {
  return (
    <div className="card-tools">
      <p>{cardData[0].projectsPage[0].tools}</p>
    </div>
  );
}
