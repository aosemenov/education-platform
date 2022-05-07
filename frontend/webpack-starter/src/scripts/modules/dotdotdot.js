// eslint-disable-next-line no-unused-vars
import dotdotdot from 'jquery.dotdotdot';

const ELEMENTS_SELECTOR = {
    truncateBox: '[data-truncate]',
};

export default function() {

    $(ELEMENTS_SELECTOR.truncateBox).each(function() {
        const $truncateBox = $(this);

        $truncateBox.dotdotdot({
            watch: 'window',
            fallbackToLetter: true,
            truncate: 'word',
        });
    });
}
