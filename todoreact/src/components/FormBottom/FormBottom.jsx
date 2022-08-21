import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'
import S from './FormBottom.module.css'

const FormBottom = () => {
    return (
        <form className={S.form}>
            <div className={S.container}>
                <div className={S.campos}>
                    <Label texto="Nome do seu amigo:" />
                    <Input style={S.input} type="text" />
                </div>
                <div className={S.campos}>
                    <Label texto="E-mail:" />
                    <Input style={S.input} type="email" />
                </div>
            </div>
            <Button style={S.button} content="Enviar agora" />
        </form>
    )
}

export default FormBottom