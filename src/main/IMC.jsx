import React, { useState } from 'react'
import './imc.css'
import img1 from './img/muitomagro.png'
import img2 from './img/saudavel.png'
import img3 from './img/sobrepeso.png'
import img4 from './img/obesidade.png'
export default (props) => {

    const [peso, setPeso] = useState()
    const [altura, setAltura] = useState()

    function calcular(peso, altura) {
        let imc = peso / (altura * altura)
        let resu;

        if (imc < 18.5) {

            return <span ><p>Abaixo do peso {imc}</p> <img src={img1} alt="" /></span>
        } else if (imc > 18.5 && imc < 24.9) {
            return <span><p>Peso normal {imc}</p> <img src={img2} alt="" /></span>
        } else if (imc > 25 && imc < 29.9) {
            return <span><p>Sobre peso {imc}</p> <img src={img3} alt="" /></span>
        } else if (imc > 30) {
            return <span><p> Obesidade + {imc}</p><img src={img4} alt="" /></span>
        }

    }

    return (
        <div className="priImc">
            <h1 className="h">  IMC</h1>
            <div>
                <p>Peso</p> <input type="number" onChange={(e) => setPeso(parseInt(e.target.value))} />

                <p>Altura</p> <input type="texto" onChange={(e) => setAltura(parseFloat(e.target.value))} />
            </div>

            <div>
                <span>
                    <p> peso <span className="peso">{peso}</span> Altura <span className="altura">{altura}</span> </p></span>

                <div>
                    <p className="resu"> {calcular(peso, altura)}</p>
                </div>

            </div>
        </div>
    )
}