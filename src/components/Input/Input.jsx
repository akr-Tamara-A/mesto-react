import React from "react"; 
 
/** Компонент "Инпут" */ 
export default function Input({name, isRequired, ...rest}) { 
  /** Разметка инпута */ 
  return ( 
    <label className="popup__form-field"> 
      <input 
        id={`input-${name}`} 
        required={isRequired} 
        {...rest}
        className="popup__input" 
      /> 
      <span id={`input-${name}-error`} className="popup__input-error"></span> 
    </label> 
  ); 
} 
 