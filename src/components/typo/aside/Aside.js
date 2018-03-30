import React from 'react'
import classnames from 'classnames'

import styles from './Aside.module.css'

const Aside = ({ children, className}) => (
    <aside className={ classnames(className, styles.aside)}>
        { children }
    </aside>
);

export default Aside;
