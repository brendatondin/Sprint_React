import React from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Button from "../Button/Button";
import S from "./Form.module.css";

const Form = () => {
    return (
        <form className={S.form}>
            <div className={S.camposInput}>
                <Label texto="Seu nome:" />
                <Input style={S.input} type="text" />
            </div>
            <div className={S.camposInput}>
                <Label texto="E-mail:" />
                <Input style={S.input} type="email" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' />
            </div>
            <div className={S.camposInput}>
                <Label texto="CPF" />
                <Input style={S.input} type="text" pattern='^[0-9]{11}$' />
            </div>
            <div className={S.RadiomInput}>
                <div className={S.radio}>
                    <input type="radio" name="sexo"/>
                    <label for="masculino">Masculino</label>
                </div>
                <div className={S.radio}>
                    <input type="radio" name="sexo"/>
                    <label for="feminino">Feminino</label>
                </div>
            </div>
            <Button style={S.button} content="Enviar" />
        </form>
    );
};

export default Form;