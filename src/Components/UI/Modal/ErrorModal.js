import React, { Fragment } from "react";
import style from "./ErrorModal.module.css";
import Card from "../Cards/Card";
import ReactDom from "react-dom";
import Button from "../Button/Button";
const BackDrop = (props) => {
  return <div className={style.backdrop} />;
};
const ModalOverlay = (props) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button
          text="Okay"
          type="button"
          onClick={props.onHideHandler}
        ></Button>
      </footer>
    </Card>
  );
};
function ErrorModal(props) {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <BackDrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          onHideHandler={props.onHide}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
}
export default ErrorModal;
