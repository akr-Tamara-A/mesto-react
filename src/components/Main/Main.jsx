import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import { api } from "../../utils/Api";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

/** Компонент "Контент страницы" */
export default function Main(props) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [cards, setCards] = useState([]);

  const currentUser = useContext(CurrentUserContext);
  
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

  /** Разметка контента страницы */
  return (
    <main className="content page__content">
      <div className="profile page__section">
        <div className="profile__container">
          <div className="profile__userpic">
            <div
              className="profile__edit"
              onClick={props.onEditAvatar}
              tabIndex="0"
            ></div>
            <img
              src={currentUser && currentUser.avatar}
              alt="Аватар автора"
              className="profile__image"
            />
          </div>
          <div className="profile__user">
            <h2 className="profile__user-name">{currentUser && currentUser.name}</h2>
            <p className="profile__user-job">{currentUser && currentUser.about}</p>
          </div>
          <button
            type="button"
            title="Редактирование профиля"
            onClick={props.onEditProfile}
            className="button button_type_edit-profile button_style_primary"
          />
        </div>
        <div className="profile__add-post">
          <button
            type="button"
            title="Добавить фото"
            onClick={props.onAddPlace}
            className="button button_type_add-photo button_style_primary"
          />
        </div>
      </div>
      <div className="elements page__section">
        <ul className="elements__container">
          {isLoading 
            ? <Spinner />
            : cards.map((card) => {
              return (
                <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
              );
            })
          }
        </ul>
      </div>
    </main>
  );
}
