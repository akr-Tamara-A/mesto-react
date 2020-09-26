import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ImagePopup from "../Popups/ImagePopup";
import PopupWithForm from "../Popups/PopupWithForm";
import EditProfilePopup from "../Popups/EditProfilePopup";
import EditAvatarPopup from "../Popups/EditAvatarPopup";
import AddPlacePopup from "../Popups/AddPlacePopup";
import Input from "../Input/Input";
import { api } from "../../utils/Api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

/** Основной компонент страницы */
function App() {
  const [currentUser, setCurrentUser] = useState();

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
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

    /** Загрузка данных карточек с сервера */
    useEffect(() => {
      api
        .getInitialCards()
        .then((data) => {
          setCards(data);
        })
        .catch((err) => {
          console.log("Ошибка. Не удалось установить новые данные: ", err);
        })
        .finally(() => {
          console.log(`cards info loaded`);
        });
    }, [setCards]);
  

  /** Функция закрытия попапов */
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }
  
  /** Обработка лайка карточки */
  const handleCardLike = currentCard => {
    /** Проверка лайкнута ли карточка */
    const isLiked = currentCard.likes.some(user => user._id === currentUser._id);
    
    api.changeLikeCardStatus(currentCard._id, !isLiked).then((newCard) => {
      const newCards = cards.map((card) => card._id === currentCard._id ? newCard : card);
      setCards(newCards);
    });
  }

  /** Обработка удаления карточки */
  const handleCardDelete = currentCard => {
    api.deleteCard(currentCard._id)
    .then((res) => {
      console.log(res);
      const newCards = cards.filter(card => {
        return card._id !== currentCard._id ? true : false
      });
      setCards(newCards);
      console.log('card deleted');
    })
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
      console.log(`user info updates`);
      setIsEditProfilePopupOpen(false);
    });
  }

  /** Обработка сабмита редактирования аватара пользователя */
  const handleUpdateAvatar = (data) => {
    api.patchUserAvatar(data)
    .then(data => {
      setCurrentUser(data);
    })
    .catch((err) => {
      console.log("Ошибка. Не удалось установить новые данные: ", err);
    })
    .finally(() => {
      console.log(`user avatar updated`);
      setIsEditAvatarPopupOpen(false);
    });
  }

  /** Обработка сабмита добавления карточки */
  const handleAddCard = (title, link) => {
    console.log(title, link);
    api.postNewCard(title, link)
    .then(newCard => {
      console.log(newCard);
      setCards([newCard, ...cards]);
    })
    .catch((err) => {
      console.log("Ошибка. Не удалось установить новые данные: ", err);
    })
    .finally(() => {
      console.log(`new card added`);
      setIsAddPlacePopupOpen(false);
    });
  }

  /** Основная разметка */
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <Header />
        <Main
          cards={cards}
          onEditProfile={() => {
            setIsEditProfilePopupOpen(true);
          }}
          onEditAvatar={() => {
            setIsEditAvatarPopupOpen(true);
          }}
          onAddPlace={() => {
            setIsAddPlacePopupOpen(true);
          }}
          onCardClick={card => {
            handleCardClick(card);
          }}
          onCardLike={card => {
            handleCardLike(card)
          }}
          onCardDelete={card => {
            handleCardDelete(card)
          }}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddCard}
        />
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
