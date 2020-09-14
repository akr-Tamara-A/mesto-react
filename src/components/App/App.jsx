import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ImagePopup from '../Popups/ImagePopup';
import PopupWithForm from '../Popups/PopupWithForm';
import Input from '../Input/Input';

/** Основной компонент страницы */
function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  /** Функция закрытия попапов */
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard('');
  }

  /** Функция обработки клика по карточке */
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  /** Основная разметка */
  return (
    <div className="page__container">
      <Header />
      <Main 
        onEditProfile={() => {
          setIsEditProfilePopupOpen(true);
        }} 
        onEditAvatar={() => {
          setIsEditAvatarPopupOpen(true);
        }}
        onAddPlace={() => {
          setIsAddPlacePopupOpen(true);
        }}
        onCardClick={(card) => {
          handleCardClick(card);
        }}
        />
      <Footer />
      <PopupWithForm
        name="editProfile"
        title="Редактировать профиль"
        submitValue = "Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <Input
          name="userName"
          type="text"
          minLength="2"
          maxLength="40"
          pattern="^[A-Za-zА-Яа-яЁё\s-]+$"
          placeholder="Имя пользователя"
          isRequired={true}
        />
        <Input
          name="userJob"
          type="text"
          minLength="2"
          maxLength="200"
          placeholder="О себе"
          isRequired={true}
        />
      </PopupWithForm>
      <PopupWithForm
        name="editAvatar"
        title="Обновить аватар"
        submitValue = "Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <Input
          name="avatar"
          type="url"
          placeholder="Ссылка на новый аватар"
          isRequired={true}
        />
      </PopupWithForm>
      <PopupWithForm
        name="addPhoto"
        title="Новое место"
        submitValue = "Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <Input
          name="photoTitle"
          type="text"
          minLength="2"
          maxLength="30"
          placeholder="Название"
          isRequired={true}
        />
        <Input
        name="photoLink"
        type="url"
        placeholder="Ссылка на картинку"
        isRequired={true}
      />
      </PopupWithForm>
      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="deleteCard"
        title="Вы уверены?"
        submitValue = "Да"
        isOpen={false}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
