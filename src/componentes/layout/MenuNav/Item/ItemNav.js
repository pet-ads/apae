import React from 'react';
import styles from './ItemNav.module.css';

function MenuItem({ name, section, scrollToSection }) {
    const handleClick = () => {
        scrollToSection(section);
    };

    return (
        <li className={styles.item}>
            <button onClick={handleClick}>{name}</button>
        </li>
    );
}

export default MenuItem;