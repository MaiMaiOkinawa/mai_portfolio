import "./Hero";
import "./CardOne";
import "./Project";

function Button(props) {
  return (
    <>
      <a
        className={props.classNameBtn}
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        {props.label}
      </a>
    </>
  );
}

export default Button;
