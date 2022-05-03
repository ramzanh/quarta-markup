// ==========================================================================
// sliderIntro
// ==========================================================================
import Swiper from 'swiper';

export default class SliderIntro {

    constructor() {

        new Swiper('.js-slider-intro', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        });

    }

}
