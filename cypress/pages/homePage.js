class HomePage {
    constructor() {
        this.tileStackCarousel = '.TileStackCarousel';
        this.nextButton = '.Swiper__Button--next';
        this.activeBackgroundImageLink = '.SwiperSlide--active a.BackgroundImage__Link';
        this.activeWatchNowButton = '.SwiperSlide--active a.Button--anchorLink';
        this.movieSlide = '.SwiperSlide';
    }

    findMovieInCarousel(movieName) {
        cy.get(this.movieSlide).each(slide => {
            this.checkCurrentlyActiveMovie(movieName).then(result => {
                if (!result) {
                    cy.get(this.nextButton).click();
                }
            });
        });
    }

    checkCurrentlyActiveMovie(movieName) {
        return cy.get(this.activeBackgroundImageLink).should('have.attr', 'href').then(href => {
            // 6 here is a length of 'shows/' part
            return href.slice(href.indexOf('shows/') + 6).split('-').join(' ') === movieName.toLowerCase();
        });
    }
}

export default HomePage;