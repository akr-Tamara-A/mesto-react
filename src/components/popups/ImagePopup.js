import React from 'react';

export default class ImagePopup extends React.Component {
  render() {
    return (
      <div id="popupViewPhoto" className="popup popup_style_view">
        <div className="popup__container">
          <button
            name="viewPhotoClose"
            type="button"
            title="Закрыть окно"
            className="popup__close"
          ></button>
          <div className="popup__view">
            <img src="#" alt="Описание фотографии" className="popup__photo" />
            <p className="popup__photo-title">Название фотографии</p>
          </div>
        </div>
      </div>
    );
  }
}


