import React from 'react'
import styles from './Spinner.module.css';

export default ({ active = true }) => {
    if (active) {
        return (
            <div className={ styles.spinner } />
        );
    } else {
        return (<div className={ styles.container } />);
    }
}
