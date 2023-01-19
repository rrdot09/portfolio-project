export default function Awards(props) {
  return (
    <>
      <p className="u-mb-10">{props.data.name}</p>
      <ul className="info_body u-mb-30">
        {props.data.award.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}
