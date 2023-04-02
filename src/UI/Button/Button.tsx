import React from 'react'
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './Button.module.scss'
import cn from 'classnames';
export interface ButtonProps extends
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
	
}

const Button = ({children, className,...props}: ButtonProps) => {
  return (
    <button className={cn(styles.button, className, {
    })}
    {...props}>
        {children}
    </button>
  )
}

export default Button