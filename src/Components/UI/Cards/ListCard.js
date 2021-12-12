import style from "./ListCard.module.css";
const ListCard=(props)=>{
return (
  <li>
    <div className={style.small_list_card}>
        {props.children}
    </div>
  </li>
);
}
export default ListCard;