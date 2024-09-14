import './index.scss';

export default function Eventos() {

    function clicou() {
        alert('eai bobao');
    }

    function movimento() {
        //alert('fica quieto aí');
    }

    function alterouCheck(e) {
        var alterou = e.target.checked;
        alert('Alterou checkbox ou radio para ' + alterou)
    }

    function alterouValor(e) {
        var novovalor = e.target.value;
        alert('alterou para ' + novovalor);
    }

    return (

        <div className='pagina-eventos pagina'>
            <header className='cabecalho'>
                <h1>ReactJS | Eventos</h1>

                <section className='secao'>

                    <h1>Entendo Eventos</h1>

                    <p onMouseMove={movimento}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed, numquam sit itaque saepe accusantium. Eveniet nulla ipsam excepturi atque beatae, maxime ipsa id quasi. Cum, dolores! Blanditiis, iste vero!</p>

                    <input onChange={alterouValor} type="text" placeholder='Digite aqui' />

                    <select>
                        <option>Selecione</option>
                        <option>Item A</option>
                        <option>Item B</option>
                    </select>

                    <div className='grupo'>
                        <input onChange={alterouCheck} type="checkbox" /> Opção 1
                        <input onChange={alterouCheck} type="checkbox" /> Opção 2
                    </div>

                    <div className='grupo'>
                        <input onChange={alterouCheck} type="radio" name='gpo' /> Opção 1
                        <input onChange={alterouCheck} type="radio" name='gpo' /> Opção 2
                    </div>

                    <button onClick={clicou}>Clique aqui</button>


                </section>
            </header>
        </div>

    );

}