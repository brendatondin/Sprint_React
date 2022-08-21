import React, { StrictMode } from "react";
import S from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={S.footer}>
            <div className={S.bdSet} />
            <div className={S.content}>
                <div className={S.texts}>
                    <p className={S.p}>Testando suas habilidades em HTML, CSS e JS.</p>
                    <p className={S.p}>Linx Impulse</p>
                    <p className={S.p}>2019</p>
                </div>
            </div>
        </footer>
    );

};

export default Footer;