import React from "react";
import Card from "../card/Card";
import { api } from "../../utils/Api";

export default function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log("Ошибка. Не удалось установить новые данные: ", err);
      });
  }, [setUserName, setUserDescription, setUserAvatar]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log("Ошибка. Не удалось установить новые данные: ", err);
      })
    }, [setCards]);

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
              src={userAvatar}
              alt="Аватар автора"
              className="profile__image"
            />
          </div>
          <div className="profile__user">
            <h2 className="profile__user-name">{userName}</h2>
            <p className="profile__user-job">{userDescription}</p>
          </div>
          <button
            type="button"
            title="Редактирование профиля"
            onClick={props.onEditProfile}
            className="button button_type_edit-profile button_style_primary"
          ></button>
        </div>
        <div className="profile__add-post">
          <button
            type="button"
            title="Добавить фото"
            onClick={props.onAddPlace}
            className="button button_type_add-photo button_style_primary"
          ></button>
        </div>
      </div>
      <div className="elements page__section">
        <ul className="elements__container">
          {cards.map((card) => {
            return (
              <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
            )
          })}
        </ul>
      </div>
    </main>
  );
}
