import React from 'react'
import styles from './BlogFrontPage.module.css'
import Copy from '../typo/copy/Copy'
import Keyword from '../typo/keyword/Keyword'
import Spinner from '../spinner/Spinner'
import Fade from '../fade/Fade'

const BlogFrontPage = ({ error, category, url }) => {
    if (error) {
        return null;
    }

    const renderCategory = () => {
        return (<Keyword>{category}</Keyword>);
    }

    const renderData = () => {
        return (
            <Copy light>
                I write blog posts and the <a href={url} target="_blank">latest  one</a> is about {renderCategory()}.
            </Copy> 
        );
    }


    return (
        <section className={ styles.blog }>
            <Fade in={ !Boolean(url) } >
                <Spinner active={true} />
            </Fade>
            <Fade in={ Boolean(url) } >
                { renderData() }
            </Fade>
        </section>
    );
}

export default BlogFrontPage;
