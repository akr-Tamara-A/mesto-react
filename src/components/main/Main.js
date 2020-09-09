import React from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  };

  handleEditAvatarClick = () => {
    document.querySelector('#popupEditAvatar').classList.add('popup_opened');
  }

  handleEditProfileClick = () => {
    document.querySelector('#popupEditProfile').classList.add('popup_opened');
  }

  handleAddPlaceClick = () => {
    document.querySelector('#popupAddPhoto').classList.add('popup_opened');
  }

  render() {
    return (
      <main className="content page__content">
        <div className="profile page__section">
          <div className="profile__container">
            <div className="profile__userpic">
              <div 
                className="profile__edit" 
                onClick={this.handleEditAvatarClick}
                tabIndex="0"></div>
              <img src="#" alt="Аватар автора" className="profile__image" />
            </div>
            <div className="profile__user">
              <h2 className="profile__user-name"></h2>
              <p className="profile__user-job"></p>
            </div>
            <button
              type="button"
              title="Редактирование профиля"
              onClick={this.handleEditProfileClick}
              className="button button_type_edit-profile button_style_primary"
            ></button>
          </div>
          <div className="profile__add-post">
            <button
              type="button"
              title="Добавить фото"
              onClick={this.handleAddPlaceClick}
              className="button button_type_add-photo button_style_primary"
            ></button>
          </div>
        </div>
        <div className="elements page__section">
          <ul className="elements__container"></ul>
        </div>
      </main>
    );
  }
}

