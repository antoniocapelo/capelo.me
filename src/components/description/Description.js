import React from 'react'
import styles from './Description.module.css'
import Copy from '../typo/copy/Copy'
import Keyword from '../typo/keyword/Keyword'

const Description = () => (
    <section className={ styles.description} >
        <Copy className={ styles.descLine }>
            Former Civil Engineer, now Software Engineer, and an all-around <Keyword>good guy</Keyword>. 
        </Copy>
        <Copy className={ styles.descLine }>
            I do most of my work on the <Keyword>frontend</Keyword> side, exploring the Javascript Lands and doin' it for the client :) 
        </Copy>
        <Copy className={ styles.descLine }>
            <strong>coffee</strong> / <strong>beatmaking</strong> / <strong>bicycles</strong> / <strong>web lover</strong>. 
        </Copy>
    </section>
)

export default Description;
