import React from 'react'
import logo from '../img/logo.png'
import style from '../componentes/styles/Nav.module.css'
import BuscarPeliculasNav from './BuscarPeliculasNav'
export default function Nav() {
  return (
    <div>
        <div className={style.contentNav}>
            <div className={style.subContent}>
                <div className={style.contentImage}>
                    <img src={logo} alt='logo'/>
                </div>
                <div>
                    <BuscarPeliculasNav/>
                </div>
            </div>
        </div>
    </div>
  )
}
