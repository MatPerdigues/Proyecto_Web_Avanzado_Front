import './header.css';
import { Fragment } from 'react';


export default function Header(){
    return(
        <Fragment>
            <header id="headerHome">
                <h1 id="h1Header">AQUARISMA</h1>
                <ul id="listHeader">
                    <li>ESTILO DE ACUARIO 1</li>
                    <li>ESTILO DE ACUARIO 2</li>
                    <li>ESTILO DE ACUARIO 3</li>
                </ul>
            </header>
        </Fragment>
    )
}