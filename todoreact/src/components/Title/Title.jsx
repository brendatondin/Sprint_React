import React from 'react'
import S from './Title.module.css'

const Title = ({ titulo, subtitulo }) => {
    return (
        <div className={S.space}>
            <h1 className={S.h1}>{titulo}</h1>
            <h2 className={S.h2}>{subtitulo}</h2>
        </div>
    )
}

export default Title