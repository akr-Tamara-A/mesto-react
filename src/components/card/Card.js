import React from 'react';

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  } 

  return (
    <li className="elements__item element">
      <figure className="element__wrapper">
        <div className="element__head">
          <img
            src={props.card.link}
            alt={props.card.name}
            tabIndex="0"
            onClick={handleClick}
            className="element__image"
          />
        </div>
        <figcaption className="element__figcaption">
          <h3 className="element__title">{props.card.name}</h3>
          <div className="element__like">
            <button
              type="button"
              title="Добавь лайк"
              className="button button_type_no-like element__like-button button_style_secondary"
            ></button>
            <p className="element__like-counter">{props.card.likes.length}</p>
          </div>
        </figcaption>
      </figure>
      <button
        type="button"
        title="Удалить фото"
        className="element__delete element__delete_hidden button button_type_delete button_style_secondary"
      ></button>
    </li>
  );
}






