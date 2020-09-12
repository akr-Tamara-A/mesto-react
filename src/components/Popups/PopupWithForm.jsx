import React from "react";

export default function PopupWithForm(props) {
  return (
    <div
      id={props.name}
      className={`popup popup_style_form ${props.isOpen && "popup_opened"}`}
    >
      <div className="popup__container">
        <button
          name="editProfileClose"
          type="button"
          title="Закрыть окно"
          onClick={props.onClose}
          className="popup__close"
        ></button>
        <form
          action="#"
          method="POST"
          name={props.name}
          noValidate
          onSubmit={props.onClose}
          className="popup__form"
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <input
            name="editProfileSubmit"
            type="submit"
            value="Сохранить"
            className="popup__submit"
          />
        </form>
      </div>
    </div>
  );
}

