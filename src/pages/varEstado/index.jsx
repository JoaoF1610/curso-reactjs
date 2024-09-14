import './index.scss';
import { useState } from 'react';

export default function VarEstado() {

    const [contador, setContador] = useState(0);
    const [tituloS2, setTituloS2] = useState("Oba");
    const [tituloS3, setTituloS3] = useState("Escolha um");
    const [selecionouS4, setSelecionouS4] = useState(true);
    const [tituloS5, setTituloS5] = useState("Fala aí");
    const [descricaoS5, setDescricaoS5] = useState("Fala aí");

    function aumentaCont() {
        setContador(contador + 1)
    }

    function diminuiCont() {
        setContador(contador - 1)
    }

    return (

        <div className='pagina-varEstado pagina'>
            <header className='cabecalho'>
                <h1>ReactJS | Variáveis de Estado</h1>
            </header>

            <div className='secao'>
                <h1>Contador</h1>

                <div className='cont'>
                    <button onClick={diminuiCont}>-</button>
                    {contador}
                    <button onClick={aumentaCont}>+</button>
                </div>


            </div>

            <div className='secao'>
                <h1>{tituloS2}</h1>
                <input onChange={e => setTituloS2(e.target.value)} type="text" value={tituloS2} />
            </div>

            <div className='secao'>
                <h1>{tituloS3}</h1>
                <select onChange={e => setTituloS3(e.target.value)}>
                    <option>Java</option>
                    <option>JavaScript</option>
                    <option>Swift</option>
                    <option>Python</option>
                    <option>React</option>
                </select>
            </div>

            <div className='secao'>
                <h1>Tudo bem, meu chapa? {selecionouS4 ? 'Sim' : 'Não'}</h1>
                <input onChange={e => setSelecionouS4(e.target.checked)} type="checkbox" checked={selecionouS4} /> sim
            </div>

            <div className='secao'>
                <h1>{tituloS5}</h1>
                <input onChange={e => setDescricaoS5(e.target.value)} type="text" value={descricaoS5} />
                <button onClick={() => setTituloS5(descricaoS5)}>Alterar</button>
            </div>

        </div>

    );

}