import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ImagePopup from "../Popups/ImagePopup";
import PopupWithForm from "../Popups/PopupWithForm";
import EditProfilePopup from "../Popups/EditProfilePopup";
import Input from "../Input/Input";
import { api } from "../../utils/Api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

/** Основной компонент страницы */
function App() {
  const [currentUser, setCurrentUser] = useState();

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  /** Загрузка данных текущего пользователя с сервера */
  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log("Ошибка. Не удалось установить новые данные: ", err);
      })
      .finally(() => {
        console.log(`user info loaded`);
      });
  }, [setCurrentUser]);

  /** Функция закрытия попапов */
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  /** Функция обработки клика по карточке */
  const handleCardClick = card => {
    setSelectedCard(card);
  }

  /** Обработка сабмита редактирования профиля пользователя */
  const handleUpdateUser = (data) => {
    api.patchUserInfo(data)
    .then(data => {
      setCurrentUser(data);
    })
    .catch((err) => {
      console.log("Ошибка. Не удалось установить новые данные: ", err);
    })
    .finally(() => {
      console.log(`user info loaded`);
      setIsEditProfilePopupOpen(false);
    });
  }

  /** Основная разметка */
  return (
    <CurrentUserContext.Provider value={currentUser}>
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
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          name="editAvatar"
          title="Обновить аватар"
          submitValue="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
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
          submitValue="Сохранить"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
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
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm
          name="deleteCard"
          title="Вы уверены?"
          submitValue="Да"
          isOpen={false}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
