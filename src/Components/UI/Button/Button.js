import style from "./Button.module.css";
const Button=(props)=>
{
return (
  <button onClick={props.onClick} className={style.costum__button} type={props.type}>
    {props.text}
  </button>
);
}
export default Button;