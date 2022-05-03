'use strict';

import 'bootstrap';
// import Gmap from 'components/gmap/gmap';
import Ymap from 'components/ymap/ymap';
import Form from 'components/form/form';
import SliderIntro from 'components/sliderIntro/sliderIntro';
import SmoothScroll from 'components/smoothScroll/smoothScroll';
import SectionProduct from 'components/sectionProduct/sectionProduct';
import Header from 'components/header/header';

$(document).ready(function () {

    // new Gmap();
    new Ymap();
    new Form();
    new SliderIntro();
    new SmoothScroll();
    new SectionProduct();
    new Header();

    $('#modalCallback')
        .on('hidden.bs.modal', function () {
            const modal = $(this);
            modal.find('form')[0].reset();
            modal.find('.js-form-call-success').hide();
            modal.find('.js-form-call-request').show();
        })
        .on('show.bs.modal', function (event) {
            const button = $(event.relatedTarget);
            const link = button.data('product-link');
            $(this).find('#product-link').val(link || '');
        });

});

