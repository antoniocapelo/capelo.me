import React from 'react'
import styles from './Flickr.module.css'
import Copy from '../typo/copy/Copy'
import Keyword from '../typo/keyword/Keyword'
import Spinner from '../spinner/Spinner'
import Fade from '../fade/Fade'
import ImageLoader from '../image-loader/ImageLoader'

const renderPhoto = (photo, idx) => {
    return (
        <ImageLoader className={styles.photo} key={idx} photo={photo} />
    );
};

const Flickr = ({ error, data }) => {
    if (error) {
        return null;
    }

    return (
        <section className={ styles.flickr} >
            <Copy light >I ❤️ cameras and enjoy testing them, mainly through <Keyword>street</Keyword> and <Keyword>documentary</Keyword> photography,  you can see some shots below.</Copy>
            <div className={ styles.photos } >
                { data && data.map(renderPhoto) }
            </div>
        </section>
    );
}

export default Flickr;

