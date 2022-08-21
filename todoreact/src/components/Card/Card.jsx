import React, { StrictMode } from "react";
import Button from "../Button/Button";
import S from "./Card.module.css";

const Card = ({ nome, desc, de, por, ou }) => {
    return (
        <article className={S.card} >
            <div className={S.img}></div>
            <h3 className={S.h3}>{nome}</h3>
            <p className={S.desc}>{desc}</p>
            <h4 className={S.h4}>De: {de}</h4>
            <h5 className={S.h5}>Por: {por}</h5>
            <p className={S.vezes}>ou 2x de: {ou}</p>
            <Button style={S.button} content="Comprar" />
        </article>
    );
};

export default Card;
