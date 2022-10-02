import React from 'react'
import "./button.styles.scss"

const BUTTON_TYPE_CLASS={
    google:"google-sign-in",
    invert:"inverted"

}
export const Button = ({children,buttonType,...otherprops}) => {
  return (
    <button
    className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`}
    {...otherprops}
    >
    {children}
    </button>
  )
}
