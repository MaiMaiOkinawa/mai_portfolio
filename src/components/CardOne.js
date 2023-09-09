import Button from "./Button";
import "./Project.css";

function CardOne(props) {
  return (
    <>
      <div className={props.className}>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
        <p>{props.text}</p>
        <Button />
      </div>
    </>
  );
}

export default CardOne;
