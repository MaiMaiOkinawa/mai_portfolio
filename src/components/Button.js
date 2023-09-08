import "./Hero";
import "./CardOne";

function Button(props) {
  return (
    <>
      <a className={props.className} href={props.href}>
        {props.text}
      </a>
    </>
  );
}

export default Button;
