import React, { useState } from "react";
import style from "./FormCard.module.css";
import ErrorModal from "./UI/Modal/ErrorModal";
let Massge = "";
let title = "";
function FormCard(props) {
  const [userInfo, setUserInfo] = useState({ name: "", age: "0" });
  const [showErrorModal, setShowErrorModal] = useState(false);
  const onHideHandler=()=>
  {
setShowErrorModal(false);
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (userInfo.name.length > 0 && userInfo.age.length > 0 && Number.parseInt(userInfo.age)>0) {
      props.onSubmitHandler({ name: userInfo.name, age: userInfo.age });
    } else {
      if (userInfo.name.length < 0) {
        Massge = "Please Enter Valid Name";
        title = "Enter Valid UserName";
      }
      else
      {
        Massge="Please Enter Valid Age";
        title="Enter Valid Age >0";
      }
      setShowErrorModal(true);
    }
    setUserInfo((prev) => {
      return {
        ...prev,
        name: "",
        age: "0",
      };
    });
  };
  const changeNameHandler = (event) => {
    setUserInfo((prev) => {
      return {
        ...prev,
        name: event.target.value,
      };
    });
  };
  const changeAgeHandler = (event) => {
    setUserInfo((prev) => {
      return {
        ...prev,
        age: event.target.value,
      };
    });
  };
  return (
    <>
      {showErrorModal && (
        <ErrorModal message={Massge} title={title} onHide={onHideHandler} />
      )}
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
    </>
  );
}
export default FormCard;
