export default function Experience(props) {
  return (
    <>
      <ul className="u-mb-10">
        <li>{props.data.name}</li>
      </ul>

      {props.data.experience.map((item) => {
        return (
          <p>
            {item.position}
            <br />
            {item.duration}
            <br />
            {item.desc}
          </p>
        );
      })}
    </>
  );
}
