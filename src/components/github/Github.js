import React from 'react'
import styles from './Github.module.css'
import Copy from '../typo/copy/Copy'
import Spinner from '../spinner/Spinner'
import Fade from '../fade/Fade'

const LanguageSpan = ({ language, isLast}) => {
    return (
        <span>
        { isLast && <span> and</span> }
        <code>
            <span className={ styles.language }> { language }</span>
        </code>
                { !isLast && <span>,</span> }
            </span>
    );
        };

const Github = ({ error, repos, languages }) => {
    if (error) {
        return null;
    }

    const renderData = () => {
        return (
            <Copy light>
            According to the Github API, I've been messing with { renderLanguages() } on my recently updated repos.
        </Copy>
        );
    }

    const renderLanguages = () => languages.map((language, idx) => (
        renderLanguage(language, idx,  idx + 1 === languages.length)));

    const renderLanguage = (lang, key, isLast) => {
        return (
            <LanguageSpan key={key} language={lang} isLast={isLast}/>
        );
    };

    return (
        <section className={ styles.github} >
            <Fade in={!Boolean(languages.length) } >
                <Spinner active={true} />
            </Fade>
            <Fade in={ Boolean(languages.length) } >
                { renderData() }
            </Fade>
        </section>
    );
}

export default Github;
