import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import classnames from 'classnames'

import Face from '../face/Face'
import ReactTypewrite from 'react-typewrite'
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

class Writer extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <ReactTypewrite timeout={ 250 } onFinish={ this.props.onFinish }>
                <h1>
                    Hi there!
                </h1>
            </ReactTypewrite>
        );
    }

    onWriteFinish = () => this.setState({ writeFinished: true })
}

class Text extends React.Component {
    state = {
        writeFinished: false
    }

    render() {
        return (
            <div className={ styles.text }>
                <Writer onFinish={ this.onWriteFinish }/>
                <Aside className={ classnames(styles.willAppear, { [styles.show]: this.state.writeFinished }) } >
                    I&#39;m António Capelo, a Front-End Engineer from Portugal
                </Aside>
                <div className={ classnames(styles.social, styles.willAppear, { [styles.show]: this.state.writeFinished }) }>
                    {socialStuff.map((el) => (
                        <a role="link" key={el.name} href={ el.url } target="_blank" rel="noopener nofollow" className={ styles.socialLink }>
                            <FontAwesomeIcon className={styles.icon } icon={ el.icon }/>
                        </a>
                    ))}
                </div>
            </div>
        );
    }

    onWriteFinish = () => this.setState({ writeFinished: true })
}


const Intro = ({ showFace }) => (
    <section className={ styles.intro} >
        <Face show={ showFace }/>
        <Text />
    </section>
)

export default Intro;
