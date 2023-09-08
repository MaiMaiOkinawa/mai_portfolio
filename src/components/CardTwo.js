function CardTwo(props) {
  return (
    <>
      <div className={props.className}>
        <h2>{props.subTitle}</h2>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default CardTwo;
