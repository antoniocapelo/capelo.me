import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import Face from '../face/Face'
import ReactTypewrite from 'react-typewrite'
import 'react-typewrite/lib/ReactTypewrite.css'

import Aside from '../typo/aside/Aside'

import styles from './Intro.module.css'
import icons from '@fortawesome/fontawesome-free-brands'

const socialStuff = [
    {
            name: 'twitter',
            icon: icons.faTwitter,
            url: 'http://twitter.com/antoniocapelo'
        },
    {
            name: 'github',
            icon: icons.faGithub,
            url: 'http://github.com/antoniocapelo'
        },
    {
            name: 'instagram',
            icon: icons.faInstagram,
            url: 'http://instagram.com/acapelo'
        },
    {
            name: 'linkedin',
            icon: icons.faLinkedin,
            url: 'http://www.linkedin.com/in/antoniocapelo'
        }
];

const Text = () => (
    <div className={ styles.text }>
        <ReactTypewrite timeout={ 250 }>
            <h1>
                Hi there!
            </h1>
        </ReactTypewrite>
        <Aside>
            I&#39;m António Capelo, a Front-End Engineer from Portugal
        </Aside>
        <div className={ styles.social }>
            {socialStuff.map((el) => (
                <a role="link" key={el.name} href={ el.url } target="_blank" rel="noopener nofollow" className={ styles.socialLink }>
                    <FontAwesomeIcon className={styles.icon } icon={ el.icon }/>
                </a>
            ))}
        </div>

    </div>
);


const Intro = () => (
    <section className={ styles.intro} >
        <Face />
        <Text />
    </section>
)

export default Intro;
