import './header.css';
import { Fragment } from 'react';

export default function Header(){
    return(
        <Fragment>

            
                <header id="headerHome">

                    <section id="secSuperiorHeader">
                        
                        <div id="tituloHeader">
                            <h1 id="h1Header">AQUARISMA</h1>
                        </div>

                    </section>
                    
                    <section id='secInferior1'>

                        <div id='secInferior1-div1' class="encabezado">
                            <p id='p1'>ECOSISTEMAS AMAZÓNICOS</p>
                            <div id='secInferior1-div2' class="menuSecInferior"></div>
                        </div>

                    </section>

                    <section id='secInferior2'>

                        <div id='secInferior2-div1' class="encabezado">
                            <p id='p2'>ECOSISTEMAS OCEÁNICOS</p>
                            <div id='secInferior2-div2' class="menuSecInferior"></div>
                        </div>

                    </section>

                    <section id='secInferior3'>

                        <div id='secInferior3-div1' class="encabezado">
                            <p id='p3'>ECOSISTEMAS DE AGUA DULCE</p>
                            <div id='secInferior3-div2' class="menuSecInferior"></div>
                        </div>

                    </section>

                </header>
            
        
        </Fragment>
    )
}
