import React from 'react'
import classnames from 'classnames'

import styles from './Keyword.module.css'

const Keyword = ({ children, className}) => (
    <span className={ classnames(styles.keyword, className)}>
        { children }
    </span>
);

export default Keyword;
