function Icon(props) {
  return (
    <div className={props.className}>
      <a
        className={props.iconCName}
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        <img src={props.src} alt={props.alt} />
      </a>
    </div>
  );
}

export default Icon;
