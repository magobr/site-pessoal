import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './style.css';

function Contato() {
    return (
        <div className='page'>

            <FontAwesomeIcon icon={faCoffee} />
            
            <div className='content-item'>

                <div className='titulo-page'>
                    Contato
                </div>

            </div>
        </div>
    )
}

export default Contato;
