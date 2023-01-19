export default function Title(props) {
  return (
    <div className="content-container">
      <h1 className="title">{props.title}</h1>
      <p className="description">{props.content}</p>
    </div>
  );
}
