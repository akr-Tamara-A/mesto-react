import React from "react"; 
 
/** Компонент "Инпут" */ 
export default function Input(props) { 
  /** Разметка инпута */ 
  return ( 
    <label className="popup__form-field"> 
      <input 
        id={`input-${props.name}`} 
        type={props.type} 
        required={props.isRequired} 
        minLength={props.minLength} 
        maxLength={props.maxLength} 
        pattern={props.pattern} 
        placeholder={props.placeholder} 
        className="popup__input" 
      /> 
      <span id={`input-${props.name}-error`} className="popup__input-error"></span> 
    </label> 
  ); 
} 
 