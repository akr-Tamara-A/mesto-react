import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ImagePopup from '../Popups/ImagePopup';
import PopupWithForm from '../Popups/PopupWithForm';
import Input from '../Input/Input';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard('');
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

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
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
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
          </>
        }
      />
      <PopupWithForm
        name="editAvatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <Input
              name="avatar"
              type="url"
              placeholder="Ссылка на новый аватар"
              isRequired={true}
            />
          </>
        }
      />
      <PopupWithForm 
        name="addPhoto"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
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
          </>
        }
      />
      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="deleteCard"
        title="Вы уверены?"
        isOpen={false}
        onClose={closeAllPopups}
        children={<></>} 
      />
    </div>
  );
}

export default App;
