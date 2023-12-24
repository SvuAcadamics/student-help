import React from 'react'
import './Button.css'

const Button = ({ buttonText, onClick }) => {
    return (
        <button className="for-but" onClick={onClick}>
          {buttonText}
        </button>
    );
}

export default Button