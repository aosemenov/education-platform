import $ from 'jquery';
import dotdotdot from "./dotdotdot";

export default function () {
    $('.tabs__items').on('click', '.tabs__item:not(.tabs__item.is-active):not(.tabs__item.is-disabled)', function(event) {
        event.preventDefault();

        let tab = $(this).data('tab');

        $(this)
            .addClass('is-active').siblings().removeClass('is-active')
            .closest('.tabs').find('.tabs__block[data-tab="'+tab+'"]')
            .addClass('is-active').siblings().removeClass('is-active');

        dotdotdot();
    });
}