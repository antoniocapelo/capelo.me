import React from 'react'
import classnames from 'classnames'

import styles from './Heading2.module.css'

const H2 = ({ children, className}) => (
    <h2 className={ classnames(className, styles.heading)}>
        { children }
    </h2>
);

export default H2;
