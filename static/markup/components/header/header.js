// ==========================================================================
// header
// ==========================================================================
export default class Header {

    constructor() {

        let $menu = $('.js-mobile-menu');
        const ACTIVE = 'active';

        $(document).on('click', '.js-burger', function (e) {

            e.preventDefault();

            if ($menu.hasClass(ACTIVE)) {

                $menu.removeClass(ACTIVE);

            } else {

                $menu.addClass(ACTIVE);

            }

        });

    }

}
