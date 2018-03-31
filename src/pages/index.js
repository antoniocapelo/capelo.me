import React, { PropTypes, Component } from 'react'
import Link from 'gatsby-link'

import Intro from '../components/intro/Intro'
import Description from '../components/description/Description'
import Github from '../components/github/Github'
import BlogFrontPage from '../components/blog-front-page/BlogFrontPage'
import Flickr from '../components/flickr/Flickr'

import getGithubData from '../utils/getGithubData';
import getLatestPost from '../utils/getLatestPost';
import getFlickrPhotos from '../utils/getFlickrPhotos';

import styles from './index.module.css'

class IndexPage extends Component {
    state = {
        photos: {
            error: undefined,
            promises: [],
        },
        ghInfo: {
            error: undefined,
            repos: [],
            languages: []
        },
        latestPost: {
            error: undefined,
            url: undefined,
            category: undefined,
        },
    }

    componentDidMount() {
        getFlickrPhotos()
        .then(({ data }) => this.setState({
            photos: {
                data,
                error: undefined
            },
        }))
        .catch((error) => this.setState({
            photos: {
                error,
                promises: undefined,
            }
        }));

        getGithubData()
        .then(({ data }) => this.setState({
            ghInfo: data,
        }))
        .catch((error) => this.setState({
            ghInfo: {
                error,
                repos: [],
                languages: [],
            }
        }));

        getLatestPost()
        .then((data) => this.setState({
            latestPost: data
        }))
        .catch((error) => this.setState({
            latestPost: {
                error,
            }
        }));
    }

    render() {
        return (
            <main className={ styles.home }>
                <Intro />
                <Description />
                <Github { ...this.state.ghInfo } />
                <BlogFrontPage { ...this.state.latestPost } />
                <Flickr { ...this.state.photos } />
            </main>
        );
    }
}

export default IndexPage
