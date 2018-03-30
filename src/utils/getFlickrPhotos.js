'use strict';

import axios from 'axios';
let axios = require('axios');
let _ = require('lodash');

const flickrConfigs = require('../../configs/apiConfigs').flickr;
const photoSetId = '72157667060400782';
const URL = 'https://api.flickr.com/services/rest';
const methods = {
    getSetPhotos: 'flickr.photosets.getPhotos',
    getPublicPhotos: 'flickr.people.getPublicPhotos',
    getSizes: 'flickr.photos.getSizes'
};

// getPhotoIdsAndTitles :: Object -> [[String, String]]
let getPhotoIdsAndTitles = (data) => {
    let photos = data.photoset.photo;
    return photos.map((el) => [el.id, el.title]);
};

// transformSizesUrlToPhotoStreamUrl :: String -> String
let transformSizesUrlToPhotoStreamUrl = (sizeUrl) => {
    return sizeUrl.replace(/\/sizes\/.+\//, '/in/photostream');
}

// getPhotoAllSizes :: [String, String] -> Promise [String, String, Object]
let getPhotoAllSizes = (idAndTitle) => {
    return axios.get(URL, {
            params: {
                    method: methods.getSizes,
                    api_key: flickrConfigs.API_KEY,
                    photo_id: idAndTitle[0],
                    format:'json',
                    nojsoncallback:'1'
                }})
    .then((response) => extractData(response))
    .then((data) => {
            return idAndTitle.concat([data]);
        });
}

// findSource :: Object -> String
let findSource = (o) => { return o.source }

// getUrl :: Object -> String
let getUrl = (sizeObj) => {
    return sizeObj.url;
}

let extractData = (obj) => obj.data;

// getSizeAndUrl :: [String, String, Object] -> [String, String, String]
let getSizeAndUrl = (idTitleAndSizes) => {
    let title = idTitleAndSizes[1];
    let sizeObject  = getSize(idTitleAndSizes[2].sizes.size)
    let url = _.flowRight(transformSizesUrlToPhotoStreamUrl, getUrl)(sizeObject);
    let src = findSource(sizeObject);

    return [].concat([title, src, url]);
}

// getSize :: [String, String, Object] -> Promise [String, String, String]
let getSize = (sizes) => {
    return _.chain(sizes)
    .filter((size) => { return size.label === 'Medium 800';})
    .head()
    .value();
}


// getMSizes :: [String, String] -> Promise [[String, String, String]]
let getMSizes = (idAndTitle) => {
    return getPhotoAllSizes(idAndTitle).then(getSizeAndUrl).then(preparePhotoInfo);
};

// preparePhotoInfo :: [String, String, String] -> Object
let preparePhotoInfo = (photoInfo) => {
    let title = photoInfo[0];
    let src   = photoInfo[1];
    let url   = photoInfo[2];
    return {url, title, src};
}

// print :: String -> null
let print = (string) => {
    return string;
}

// printPhotos [[String, String, String]] -> [Object}
let printPhotos = (stuff) => {
    return _.map(stuff, preparePhotoInfo);
};

// printPhoto [[String, String, String]] -> [Object}
let printPhoto = (photoPromises) => {
    return _.map(photoPromises, preparePhotoInfo);
};

let getSetPhotos = () => {
    return axios.get(URL, {
            params: {
                        method: methods.getSetPhotos,
                        photoset_id: photoSetId,
                        api_key: flickrConfigs.API_KEY,
                        user_id: flickrConfigs.USER_ID,
                        per_page: flickrConfigs.NUM_RESULTS,
                        format:'json',
                        nojsoncallback:'1'
                    }
        })
    .then((response) => {
            return response.data;
        })
}

// getSizesForAllPhotos :: [[String, String]] -> Promise
let getSizesForAllPhotos = (idsAndTitles) => {
    let promises = idsAndTitles.map(getMSizes);
    return Promise.all(promises);
}

// getSizesForAllPhotosPromises :: [[String, String]] -> [Promise]
let getSizesForAllPhotosPromises = (idsAndTitles) => {
    return idsAndTitles.map(getMSizes);
}


// getPhotos :: Boolean -> [Object]
function getPhotos(isMobile) {
    return getSetPhotos()
    .then(getPhotoIdsAndTitles)
    .then(getSizesForAllPhotos)
    .then(printPhotos)
    .catch((e) => {
            console.log('fail', e);
        });
}

// getPhotosPromises :: Boolean -> [Promise]
function getPhotosPromises(isMobile) {
    return getSetPhotos()
    .then(getPhotoIdsAndTitles)
    .then(getSizesForAllPhotosPromises)
    .catch((e) => {
            console.log('fail', e);
        });
}

export default getPhotosPromises;

