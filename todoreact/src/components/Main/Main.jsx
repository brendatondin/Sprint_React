import React, { useState } from "react";
import { useEffect } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Form from '../Form/Form';
import FormBottom from '../FormBottom/FormBottom'
import Text from '../Text/Text';
import S from './Main.module.css'

const Main = () => {
    const [informacoes, setInformacoes] = useState([]);
    const [page, setPage] = useState(1)

    async function handleRequisicao() {
        const response = await fetch(
            `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`
        );
        const json = await response.json();
        setInformacoes([...informacoes, ...json.products]);
        console.log(informacoes)
    }

    const nextPage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        handleRequisicao();
    }, [page]);

    return (
        <main className={S.main}>
            <section className={S.SectionForm}>
                <Text />
                <Form />
            </section>
            <section className={S.SectionCards}>
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
                    {informacoes.length > 0 &&
                        informacoes.map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    img={item.image}
                                    nome={item.name}
                                    desc={item.description}
                                    de={item.oldPrice}
                                    por={item.price}
                                    vezes={item.installments.count}
                                    ou={item.installments.value}
                                />
                            );
                        })}
                </div>
                <Button onClick={nextPage} style={S.button} content="Adquira mais produtos aqui" />
            </section>
            <section className={S.SectionBottomForm}>
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
