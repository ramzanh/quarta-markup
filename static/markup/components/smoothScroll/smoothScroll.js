// ==========================================================================
// smoothScroll
// ==========================================================================
export default class SmoothScroll {

    constructor() {

        $(document).on('click', '.js-smooth-scroll', function (e) {

            e.preventDefault();
            let
                $el = $(this),
                $target = $($el.attr('href'));
            if ($target.length) {
                $('html, body').animate({
                    scrollTop: $target.offset().top
                }, 500);
            }

        });

    }

}
