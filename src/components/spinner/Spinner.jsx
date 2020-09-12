import React from 'react';
import './Spinner.css';

export default function Spinner() {
  return (
    <div className="spinner">
      <div className="spinner__item"></div>
      {/* <div class="spinner__circle spinner__opacity-1"></div>
      <div class="spinner__circle spinner__opacity-2"></div>
      <div class="spinner__circle spinner__opacity-3"></div> */}
    </div>
  );
}
