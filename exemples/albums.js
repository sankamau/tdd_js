import { searchAlbums } from '../src/spotfy';

global.fetch = require('node-fetch');

const albums = searchAlbums('Incubus');

console.log(albums);
