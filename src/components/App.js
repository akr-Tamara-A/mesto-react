import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import ImagePopup from './popups/ImagePopup';

function App() {
  return (
    <div className="page__container">
      <Header />
      <Main />
      <Footer />

    <template id="elementTemplate">
      <li className="elements__item element">
        <figure className="element__wrapper">
          <div className="element__head">
            <img src="#" 
                alt="Описание фотографии" 
                tabIndex="0"
                className="element__image" />
          </div>
          <figcaption className="element__figcaption">
            <h3 className="element__title"></h3>
            <div className="element__like">
              <button 
                      type="button" 
                      title="Добавь лайк"
                      className="button button_type_no-like element__like-button button_style_secondary"></button>
              <p className="element__like-counter"></p>
            </div>
          </figcaption>
        </figure>
        <button 
                type="button" 
                title="Удалить фото"
                className="element__delete element__delete_hidden button button_type_delete button_style_secondary"></button>
      </li>
    </template>

    <div id="popupEditProfile" className="popup popup_style_form">
      <div className="popup__container">
        <button 
              name="editProfileClose" 
              type="button" 
              title="Закрыть окно" 
              className="popup__close">
        </button>
        <form 
              action="#"
              method="POST"
              name="editProfile" 
              noValidate
              className="popup__form">
          <h2 className="popup__title">Редактировать профиль</h2>
          <label className="popup__form-field">
            <input 
                  id="input-userName"
                  name="editProfileUserName" 
                  type="text" 
                  required
                  minLength="2"
                  maxLength="40"
                  pattern="^[A-Za-zА-Яа-яЁё\s-]+$"
                  placeholder="Имя пользователя" 
                  className="popup__input popup__input_type_username" />
            <span id="input-userName-error" className="popup__input-error"></span>
          </label>
          <label className="popup__form-field">
            <input 
                  id="input-userJob"
                  name="editProfileUserJob" 
                  type="text" 
                  required
                  minLength="2"
                  maxLength="200"
                  placeholder="О себе" 
                  className="popup__input popup__input_type_about" />
            <span id="input-userJob-error" className="popup__input-error"></span>
          </label>
          <input 
                name="editProfileSubmit" 
                type="submit" 
                value="Сохранить" 
                className="popup__submit" />
        </form>
      </div>
    </div>

    <div id="popupEditAvatar" className="popup popup_style_form">
      <div className="popup__container">
        <button 
              name="editAvatarClose" 
              type="button" 
              title="Закрыть окно" 
              className="popup__close">
        </button>
        <form 
              action="#"
              method="POST"
              name="editAvatar" 
              noValidate
              className="popup__form">
          <h2 className="popup__title">Обновить аватар</h2>
          <label className="popup__form-field">
            <input 
                  id="input-avatar"
                  name="editUserAvatar" 
                  type="url" 
                  required
                  placeholder="Ссылка на новый аватар" 
                  className="popup__input popup__input_type_avatar" />
            <span id="input-avatar-error" className="popup__input-error"></span>
          </label>
          <input 
                name="editAvatarSubmit" 
                type="submit" 
                value="Сохранить" 
                className="popup__submit" />
        </form>
      </div>
    </div>

    <div id="popupAddPhoto" className="popup popup_style_form">
      <div className="popup__container">
        <button 
              name="addPhotoClose" 
              type="button" 
              title="Закрыть окно" 
              className="popup__close">
        </button>
        <form 
              action="#"
              method="POST"
              name="addPhoto" 
              noValidate
              className="popup__form">
          <h2 className="popup__title">Новое место</h2>
          <label className="popup__form-field">
            <input 
                  id="input-photoTitle"
                  name="addPhotoTitle" 
                  type="text" 
                  placeholder="Название" 
                  required
                  minLength="2"
                  maxLength="30"
                  className="popup__input popup__input_type_photo-title" />
            <span id="input-photoTitle-error" className="popup__input-error"></span>
          </label>
          <label className="popup__form-field">
            <input 
                  id="input-photoLink"
                  name="addPhotoLink" 
                  type="url" 
                  placeholder="Ссылка на картинку" 
                  required
                  className="popup__input popup__input_type_photo-link" />
            <span id="input-photoLink-error" className="popup__input-error"></span>
          </label>
          <input 
                name="addPhotoSubmit" 
                type="submit" 
                value="Сохранить" 
                className="popup__submit" />
        </form>
      </div>
    </div>
                                            
    <ImagePopup />

    <div id="popupDeleteCard" className="popup popup_style_form">
      <div className="popup__container">
        <button 
              name="deleteCardClose" 
              type="button" 
              title="Закрыть окно" 
              className="popup__close">
        </button>
        <form 
              action="#"
              method="POST"
              name="deleteCard" 
              noValidate
              className="popup__form">
          <h2 className="popup__title">Вы уверены?</h2>
          <input 
                name="deleteCardSubmit" 
                type="submit" 
                value="Да" 
                className="popup__submit" />
        </form>
      </div>
    </div>
    </div>
  );
}

export default App;
