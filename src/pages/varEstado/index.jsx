import './index.scss';
import { useState } from 'react';

export default function VarEstado() {
    
    const[contador, setContador] = useState(0);

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


        </div>

    );

}