import gplay from 'google-play-scraper';

module.exports = {
  async googleplayScrape({ appId }) {
    try {
      const scrapedApp = await gplay.app({ appId });
      return scrapedApp;
    } catch (e) {
      return null;
    }
  },
};
