import React from 'react'
import Fade from '../fade/Fade'
import Spinner from '../spinner/Spinner'
import styles from './ImageLoader.module.css';

export default class ImageLoader extends React.PureComponent {
    state = {
        photo: undefined,
        photoLoaded: false,
    }

    componentDidMount() {
        this.setState({
            photo: this.props.photo,
        })
        this.checkWhenLoaded(this.props.photo.src);
    }

    render() {
        let aStyle = this.state.photo ? {
            backgroundImage: 'url(' + this.state.photo.src + ')'
        } : {};
        return (
            <div className={ styles.photoContainer }>
                <Fade in={ !this.state.photoLoaded }>
                    { !this.state.photoLoaded && <a className={ styles.anchor} href={this.state.photo ? this.state.photo.url : ''} target="_blank">
                        <Spinner key={this.props.key} active={true} />
                    </a>}
                </Fade>
                <Fade in={ this.state.photoLoaded }>
                    { this.state.photoLoaded && <a className={ styles.anchor} style={aStyle} href={this.state.photo ? this.state.photo.url : ''} target="_blank" key={this.props.key} >
                        <div className={ styles.info }>
                            <p>
                                {this.state.photo ? this.state.photo.title : ''}
                            </p>
                        </div>
                    </a> }
                </Fade>
            </div>
        );
    }

    checkWhenLoaded = (photoSrc) => {
        let imgAux = new Image();
        imgAux.src = photoSrc;
        imgAux.onload = () => {
            this.setState({
                photoLoaded: true
            });
        };
    }
}

