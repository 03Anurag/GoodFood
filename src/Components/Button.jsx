import React from 'react'

const Button = ({children , textOnly , ...props}) => {
    const cssClass = textOnly ? 'text-button' : 'button';
  return (
    <button className={cssClass} {...props}>{children}</button>
  )
}

export default Button