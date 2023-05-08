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

                        <div id='secInferior1-div1'>
                            <p id='p1'>ECOSISTEMAS AMAZÓNICOS</p>
                            <div id='secInferior1-div2'></div>
                            <div id='secInferior1-div3'></div>
                        
                        </div>

                        
                    </section>

                </header>
            
        
        </Fragment>
    )
}
