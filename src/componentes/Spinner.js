import React from 'react'
import style from './styles/Spinner.module.css';
import { FaSpinner } from 'react-icons/fa';

export default function Spinner() {
  return (
    <div className={style.spinner}>
        <FaSpinner className={style.spinning} size={60} />
    </div>
  )
}
