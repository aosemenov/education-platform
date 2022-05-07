const ClassName = {
    ROOT: 'js-accordion',
    ITEM: 'js-accordion-item',
    CONTENT: 'js-accordion-content',
    ACTIVE: 'is-active',
    ANCHOR: 'js-moder-anchor'
};

export default function accordion() {
    $(document).on('click', `.${ClassName.ITEM}`,  handleItemClick);
    console.log('work');
    function handleItemClick(e) {
        const $item = $(e.currentTarget);

        if ($item.hasClass(ClassName.ACTIVE)) {
            if (!$(e.target).parents(`.${ClassName.CONTENT}`).length) {
                $item.toggleClass(ClassName.ACTIVE);
            }
        } else {
            $item.toggleClass(ClassName.ACTIVE);
        }
    }
}