import "./Card.css";
function Card(props) {
const classname="card "+props.className;
   return (<div className={classname}>{props.children}</div>);
}
export default Card;