import HomePage from "../pages/homePage";
import movies from '../fixtures/moviesToFind.json';

describe('National Geo Movies', () => {
  const homePage = new HomePage();

  movies.expectedMovies.forEach(expectedMovieName => {
    it(`Watching a "${expectedMovieName}" movie`, () => {
      cy.visit('');
      cy.get(homePage.tileStackCarousel).scrollIntoView();
      homePage.findMovieInCarousel(expectedMovieName);
      cy.get(homePage.activeWatchNowButton).click();
    });
  });
});