import React, { useState } from "react";
import style from "./FormCard.module.css";
function FormCard(props)
{
    const [userInfo, setUserInfo] = useState({ name: "", age: "0" });
    const onSubmitHandler=(event)=>{
     event.preventDefault();
     if (userInfo.name.length > 0 && userInfo.age.length>0)
       props.onSubmitHandler({ name: userInfo.name, age: userInfo.age });
  setUserInfo((prev) => {
  return {
    ...prev,
    name:"",
    age:"0"
  };
});
    }
    const changeNameHandler=(event)=>{

         setUserInfo((prev) => {
           return {
             ...prev,
             name: event.target.value,
           };});

    };
    const changeAgeHandler=(event)=>{

  setUserInfo((prev) => {
    return {
      ...prev,
      age: event.target.value,
    };
  });

    };
    return (
      <div>
        <form onSubmit={onSubmitHandler}>
          <label>Username</label>
          <input
            type="text"
            className={style.adjust}
            value={userInfo.name}
            onChange={changeNameHandler}
          />
          <label>Age(Years)</label>
          <input
            type="Number"
            className={style.adjust}
            value={userInfo.age}
            onChange={changeAgeHandler}
          />
          <button type="submit" className={style.button}>
            Add Users
          </button>
        </form>
      </div>
    );
}
export default FormCard;