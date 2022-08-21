import React from 'react'
import Button from "../Button/Button";
import Card from "../Card/Card";
import Form from '../Form/Form';
import FormBottom from '../FormBottom/FormBottom'
import Text from '../Text/Text';
import S from './Main.module.css'

const Main = () => {
    return (
        <main className={S.main}>
            <section className={S.firstSec}>
                <Text />
                <Form/>
            </section>
            <section className={S.secondSec}>
                <div className={S.h3Line}>
                    <div>
                        <hr />
                    </div>
                    <h3 className={S.h3}>Sua seleção especial!</h3>
                    <div>
                        <hr />
                    </div>
                </div>
                <div className={S.cards}>
                    <Card
                        nome="Nome do produto"
                        desc="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
                        de="23,99"
                        por="19,99"
                        ou="9,99"
                    />
                    <Card
                        nome="Nome do produto"
                        desc="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
                        de="23,99"
                        por="19,99"
                        ou="9,99"
                    />
                    <Card
                        nome="Nome do produto"
                        desc="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
                        de="23,99"
                        por="19,99"
                        ou="9,99"
                    />
                    <Card
                        nome="Nome do produto"
                        desc="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
                        de="23,99"
                        por="19,99"
                        ou="9,99"
                    />
                    <Card
                        nome="Nome do produto"
                        desc="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
                        de="23,99"
                        por="19,99"
                        ou="9,99"
                    />
                    <Card
                        nome="Nome do produto"
                        desc="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
                        de="23,99"
                        por="19,99"
                        ou="9,99"
                    />
                    <Card
                        nome="Nome do produto"
                        desc="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
                        de="23,99"
                        por="19,99"
                        ou="9,99"
                    />
                    <Card
                        nome="Nome do produto"
                        desc="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
                        de="23,99"
                        por="19,99"
                        ou="9,99"
                    />
                </div>
                <Button style={S.button} content="Adquira mais produtos aqui" />
            </section>
            <section className={S.thirdSec}>
                <div className={S.h3Line}>
                    <div>
                        <hr />
                    </div>
                    <h3 className={S.h3}>Compartilhe a novidade</h3>
                    <div>
                        <hr />
                    </div>
                </div>
                <p className={S.p}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
                <FormBottom />
            </section>
        </main>
    );
}

export default Main
