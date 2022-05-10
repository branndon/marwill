import React from 'react'

// styled
import { Container } from './styles';

function Modal({ branndon }) {
  return (
    <Container className='modal'>
        <div className="header">
            <div className="header__infos">
                <div className="img"></div>

                <div className="content">
                    <h3>Peter Parker</h3>
                    <p>Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.</p>
                </div>
            </div>

            <div className="header__close">
                <button onClick={() => branndon(false)}>X</button>
            </div>
        </div>

        <div className="main-content">
            <div>
                <h4>Comics</h4>
                <p>Spider-Man: 101 Ways to End the Clone Saga (1997) #1 2099 Alpha (2019) #1 A YEAR OF MARVELS TPB (Trade Paperback) A Year of Marvels: April Infinite Comic (2016) #1 A Year of Marvels: February Infinite Comic (2016) #1 A+X (2012) #4 Spider-Man: 101 Ways to End the Clone Saga (1997) #1 2099 Alpha (2019) #1 A YEAR OF MARVELS TPB (Trade Paperback) A Year of Marvels: April Infinite Comic (2016) #1 A Year of Marvels: February Infinite Comic (2016) #1 A+X (2012) #4</p>
                <button>Ver todos</button>
            </div>

            <div>
                <h4>Comics</h4>
                <p>Spider-Man: 101 Ways to End the Clone Saga (1997) #1 2099 Alpha (2019) #1 A YEAR OF MARVELS TPB (Trade Paperback) A Year of Marvels: April Infinite Comic (2016) #1 A Year of Marvels: February Infinite Comic (2016) #1 A+X (2012) #4 Spider-Man: 101 Ways to End the Clone Saga (1997) #1 2099 Alpha (2019) #1 A YEAR OF MARVELS TPB (Trade Paperback) A Year of Marvels: April Infinite Comic (2016) #1 A Year of Marvels: February Infinite Comic (2016) #1 A+X (2012) #4</p>
                <button>Ver todos</button>
            </div>
        </div>
    </Container>
  )
}

export default Modal