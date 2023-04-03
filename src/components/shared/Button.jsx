import React from 'react'
import classNames from "classnames"

const Button = ({name,handleClick,style,buttonActive}) => {
  return (
    <button
        onClick={handleClick}
        className={classNames(style,buttonActive)}
        >
        {name}
    </button>
  )
}

export default Button