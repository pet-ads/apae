import React from 'react';
import styles from './ItemNav.module.css';

function MenuItem({ section, scrollToSection }) {
    const handleClick = () => {
        scrollToSection(section);
    };

    return (
        <li className={styles.item}>
            <button onClick={handleClick}>{section}</button>
        </li>
    );
}

export default MenuItem;