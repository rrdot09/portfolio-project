export default function Education(props) {
  return (
    <>
      <p className="info_body u-mb-30">
        {props.data.name}
        <br />
        {props.data.place}
        <br />
        {props.data.program}
      </p>
    </>
  );
}
