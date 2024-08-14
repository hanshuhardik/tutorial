import "./Card.css";

function Card(props) {
  const classes = props.className;
  return (
    <div id="id1" className={classes}>
      {props.children}
    </div>
  );
}
export default Card;
