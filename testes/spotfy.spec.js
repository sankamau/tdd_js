import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import {
  search, searchAlbums, searchArtists, searchTrack, searchPlaylist,
} from '../src/spotfy';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

let fetchedStub;
// eslint-disable-next-line no-unused-vars
let promise;
// eslint-disable-next-line no-undef
beforeEach(() => {
  fetchedStub = sinon.stub(global, 'fetch');
  promise = fetchedStub.resolves({ json: () => ({ album: 'name' }) });
});

// eslint-disable-next-line no-undef
afterEach(() => {
  fetchedStub.restore();
});

describe('Spotfy', () => {
  describe('smoke', () => {
    it('should exist the search method', () => {
      expect(search).to.exist;
    });
    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });
    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });
    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });
    it('should exist the searchPlaylist method', () => {
      expect(searchPlaylist).to.exist;
    });

  describe('Generic Seach', () => {
    it('should call fetch function', () => {
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
      });
    it('should recive the correct url to fetch', () => {

      context('passing one type', () => {
        const artists = search('Incubos', 'artist');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubos&type=artist');

        const albums = search('Incubos', 'album');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubos&type=album');
      });
      context('passing with more then one type', () => {
        const artistsAndAlbums = search('Incubos', ['artist', 'album']);
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubos&type=artist,album');
      });
    });
    it('should return the JSON Data from the Promiss', () => {
    //   const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
    //   album.then((data) => {
    //     expect(data).to.be.eql({ album: 'name' });
    //  });
    });
  });
  describe('searchAlbums', () => {
    it('should call fetch function', () => {
     const albums = searchAlbums('Incubus');
     expect(fetchedStub).to.have.calledOnce;
    });
    it('should call fetch with the correct URL', () => {
      const albums2 = searchAlbums('Incubos');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubos&type=album');
    });
  });
  describe('searchTrack', () => {
    it('should call fetch function', () => {
     const tracks = searchTrack('Incubus');
     expect(fetchedStub).to.have.calledOnce;
    });
    it('should call fetch with the correct URL', () => {
      const tracks2 = searchTrack('Incubos');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubos&type=track');
    });
  });
  describe('searchPlaylist', () => {
    it('should call fetch function', () => {
     const playlist = searchPlaylist('Incubus');
     expect(fetchedStub).to.have.calledOnce;
    });
    it('should call fetch with the correct URL', () => {
      const playlist2 = searchPlaylist('Incubos');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubos&type=playlist');
    });
  });

  });
});
