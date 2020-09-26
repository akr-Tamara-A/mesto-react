import React, { useState, useCallback, useEffect } from "react";
import PopupWithForm from "../Popups/PopupWithForm";
import Input from "../Input/Input";

export default function AddPlacePopup(props) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {

  })
  
  const handleChangeTitle = useCallback(evt => {
    setTitle(evt.target.value);
  }, [setTitle]);

  const handleChangeLink = useCallback(evt => {
    setLink(evt.target.value);
  }, [setLink]);

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    props.onAddPlace(title, link);
    setTitle('');
    setLink('');
  }, [title, link]);


  return (
    <PopupWithForm
      name="addPhoto"
      title="Новое место"
      submitValue="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <Input
        name="photoTitle"
        type="text"
        minLength="2"
        maxLength="30"
        placeholder="Название"
        isRequired={true}
        value={title}
        onChange={handleChangeTitle}
      />
      <Input
        name="photoLink"
        type="url"
        placeholder="Ссылка на картинку"
        isRequired={true}
        value={link}
        onChange={handleChangeLink}
      />
    </PopupWithForm>
  );
}
