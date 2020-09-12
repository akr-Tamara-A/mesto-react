import React from 'react';

export default function ImagePopup(props) {
  return (
    <div id="popupViewPhoto" className={`popup popup_style_view ${props.card && "popup_opened"}`}>
      <div className="popup__container">
        <button
          name="viewPhotoClose"
          type="button"
          title="Закрыть окно"
          onClick={props.onClose}
          className="popup__close"
        ></button>
        <div className="popup__view">
          <img 
            src={props.card && props.card.link} 
            alt={props.card && props.card.name} 
            className="popup__photo" />
          <p className="popup__photo-title">{props.card && props.card.name}</p>
        </div>
      </div>
    </div>
  );
}


