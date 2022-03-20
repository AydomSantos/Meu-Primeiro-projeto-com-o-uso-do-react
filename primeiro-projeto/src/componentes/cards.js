import react from 'react'

import icon_sedans from'./images/icon-sedans.svg'
import icon__suvs from './images/icon-suvs.svg'
import icon__luxy from './images/icon-luxury.svg'

export default function Cards(){

    return(
        <>
    
        <div className="card card__sedans">
             <img src={icon_sedans}></img>
             <h3>Sedan</h3>
             <p>
             Escolha um sedan por sua acessibilidade e excelente economia de combustível. Ideal para um cruzeiro pela cidade ou na sua próxima viagem.
             </p>
             <button className="bnt--bright-orange">Saiba Mais</button>
        </div>

        <div className="card card__suvs">
             <img src={icon__suvs }></img>
             <h3>Suvs</h3>
             <p>
             Considere um SUV por seu interior espaçoso, potência e versatilidade. Perfeito para suas próximas férias em família e aventuras off-road.
             </p>
             <button className="bnt--dark-cyan">Saiba Mais</button>
        </div>

        <div className="card card__luxo">
             <img src={icon__luxy}></img>
             <h3>Luxo</h3>
             <p>
             Navegue nas melhores marcas de automóveis sem os preços exagerados. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.
             </p>
             <button className="bnt--very-dark-cyan">Saiba Mais</button>
        </div>


        </>
    )
}