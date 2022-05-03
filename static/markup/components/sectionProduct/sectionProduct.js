// ==========================================================================
// sectionProduct
// ==========================================================================
import Swiper from 'swiper';
import $ from 'jquery';
import 'lightgallery';
import 'lg-zoom';
import 'lg-thumbnail';
import 'lg-video';

export default class SectionProduct {

    constructor() {
        let
            $sliderImages = $('.js-slider-product-images'),
            $sliderThumbnails = $('.js-slider-product-thumbnails'),
            sliderImages,
            sliderThumbs;

        if ($sliderImages.length) {
            sliderImages = new Swiper($sliderImages, {
                breakpoints: {
                    991: {
                        autoHeight: true
                    }
                }
            });

            $sliderImages.lightGallery({
                selector: '.js-slider-product-images__item',
                loadYoutubeThumbnail: true
            });
        }

        if ($sliderThumbnails.length) {
            sliderThumbs = new Swiper($sliderThumbnails, {
                centeredSlides: true,
                slidesPerView: 4,
                slideToClickedSlide: true,
                spaceBetween: 20,
            });
        }

        if ($sliderImages.length && $sliderThumbnails.length) {
            sliderImages.controller.control = sliderThumbs;
            sliderThumbs.controller.control = sliderImages;
        }

    }

}
