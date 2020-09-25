import React, { useState, useContext, useCallback, useEffect } from "react";
import PopupWithForm from "../Popups/PopupWithForm";
import Input from "../Input/Input";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function EditAvatarPopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [avatar, setAvatar] = useState('');
  
  useEffect(() => {
    if (currentUser) {
      setAvatar(currentUser.avatar);
    }
  }, [currentUser]);

  const handleOnChangeAvatar = useCallback((e) => {
    setAvatar(e.target.value);
  }, [setAvatar])
  
  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    props.onUpdateAvatar(avatar);
  }, [avatar]);

  return (
    <PopupWithForm
      name="editAvatar"
      title="Обновить аватар"
      submitValue="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <Input
        name="avatar"
        type="url"
        placeholder="Ссылка на новый аватар"
        isRequired={true}
        onChange={handleOnChangeAvatar}
      />
    </PopupWithForm>
  );
}
