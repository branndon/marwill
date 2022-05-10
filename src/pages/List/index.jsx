import React from 'react'

// styled
import { Section } from './styles';
import { ContentCenter } from '../../styles/global';

// images
import bg from '../../assets/images/bg-test.svg';
import Modal from '../../components/Modal/index';
import { useState } from 'react';

function List() {
    const items = ['Spider-Man', 'Hulk', 'Loki', 'Black Widow', 'Doctor Strange'];
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = (flag) => {
        setShowModal(flag);
    };

  return (
      <Section className="page-list">
          {showModal && <Modal branndon={handleShowModal} />}

          <ContentCenter>
            <div className="page-list__header">
                <h2>Personagens<br/> exclusivos</h2>

                <div>
                    <input type="text" placeholder="Digite sua busca" />
                </div>
            </div>
            <div className="page-list__content">
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <button onClick={() => handleShowModal(true)}>
                                <div>
                                    <img src={bg} alt="" />
                                </div>
                                <h3>{item}</h3>
                            </button>
                        </li>
                    ))}
                    <li className="branndon">
                        <button>
                            Marwill<br/>
                            <span>Ver todos</span>
                        </button>
                    </li>
                </ul>
            </div>
          </ContentCenter>
      </Section>
  )
}

export default List;
