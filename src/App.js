import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page__container">
      <header className="header page__header page__section">
        <a href="#" className="header__logo-link">
          <img src="./images/logo.svg" alt="" className="logo header__logo" />
        </a>
        <h1 className="header__title">Сервис Mesto Russia</h1>
      </header>

      <main className="content page__content">

        <div className="profile page__section">
          <div className="profile__container">
            <div className="profile__userpic">
              <div className="profile__edit" tabindex="0"></div>
              <img src="#" alt="Аватар автора" className="profile__image" />
            </div>
            <div className="profile__user">
              <h2 className="profile__user-name"></h2>
              <p className="profile__user-job"></p>
            </div>
            <button
              type="button"
              title="Редактирование профиля"
              className="button button_type_edit-profile button_style_primary"></button>
          </div>
          <div className="profile__add-post">
            <button
              type="button"
              title="Добавить фото"
              className="button button_type_add-photo button_style_primary"></button>
          </div>
        </div>

      <div className="elements page__section">
        <ul className="elements__container">
          
        </ul>

      </div>

    </main>

    <footer className="footer page__footer page__section">
      <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
    </footer>

    <template id="elementTemplate">
      <li className="elements__item element">
        <figure className="element__wrapper">
          <div className="element__head">
            <img src="#" 
                alt="Описание фотографии" 
                tabindex="0"
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
              novalidate
              className="popup__form">
          <h2 className="popup__title">Редактировать профиль</h2>
          <label className="popup__form-field">
            <input 
                  id="input-userName"
                  name="editProfileUserName" 
                  type="text" 
                  required
                  minlength="2"
                  maxlength="40"
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
                  minlength="2"
                  maxlength="200"
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
              novalidate
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
              novalidate
              className="popup__form">
          <h2 className="popup__title">Новое место</h2>
          <label className="popup__form-field">
            <input 
                  id="input-photoTitle"
                  name="addPhotoTitle" 
                  type="text" 
                  placeholder="Название" 
                  required
                  minlength="2"
                  maxlength="30"
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
                                            
    <div id="popupViewPhoto" className="popup popup_style_view">
      <div className="popup__container">
        <button 
              name="viewPhotoClose" 
              type="button" 
              title="Закрыть окно" 
              className="popup__close">
        </button>
        <div className="popup__view">
          <img src="#" alt="Описание фотографии" className="popup__photo" />
          <p className="popup__photo-title">Название фотографии</p>
        </div>
      </div>
    </div>

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
              novalidate
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
