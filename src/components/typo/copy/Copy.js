import React from 'react'
import classnames from 'classnames'

import styles from './Copy.module.css'

const Copy = ({ children, light = false, className}) => (
    <p className={ classnames(styles.copy, { [styles.light]: light }, className)}>
        { children }
    </p>
);

export default Copy;
