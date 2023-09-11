import React from 'react'
import styles from './index.module.css';
import { clsx } from 'clsx';

const index = ({ children, type }) => {
  return (
    <div
    className={clsx({
      [styles.success]: type === 'success',
      [styles.error]: type === 'error',
    })}
  >
    {children}
  </div>
  )
}

export default index