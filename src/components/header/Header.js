import React from 'react';
import './Header.css';
import { AddressBook } from 'phosphor-react';

function Header(props) {
    return (
        <header>
            <div className="header-cell">
                <AddressBook size={32} color="#808080" />
                <h2>Phone Book</h2>
            </div>
        </header>
    );
}

export default Header;
