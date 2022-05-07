const CLEAR_BTN_TEMPLATE = `
<button type="button" class="form-field__clear-button js-form-field-clear-button">
        <svg class="form-field__clear-icon icon">
            <use xlink:href="/static/icons/sprite.svg#clearInput"></use>
        </svg>
</button>`;

const ClassName = {
    ROOT: 'js-form-field',
    INPUT: 'js-form-field-input',
    ACTIVE: 'is-active',
    CLEAR_BTN: 'js-form-field-clear-button',
    WITHOUT_CLEAR: 'js-without-clear-btn',
};

export default function initializeFormFields() {
    const $elements = $(`.${ClassName.ROOT}`);

    $elements.each((index, elem) => {
        initializeFormField(elem);
    });
}

export function initializeFormField(elem) {
    const $element = $(elem);
    const $input = $element.find(`.${ClassName.INPUT}`);
    let $clearBtn;

    $element.on('focusin', handleFocusIn);
    $element.on('focusout', handleFocusOut);

    $input.on('input', handleInput);

    if (!isEmptyInput($input)) {
        showClearBtn();
    }

    function isEmptyInput($input) {
        return !$input.val();
    }

    function isInput($element) {
        return $element.hasClass(ClassName.INPUT);
    }

    function activate($field) {
        $field.addClass(ClassName.ACTIVE);
    }

    function deactivate($field) {
        $field.removeClass(ClassName.ACTIVE);
    }

    function createClearBtn() {
        const $btn = $(CLEAR_BTN_TEMPLATE);

        $btn.one('click', handleClick);

        return $btn;
    }

    function hideClearBtn() {
        if ($clearBtn !== undefined) {
            $clearBtn.remove();
        }
    }

    function showClearBtn() {
        if ($clearBtn !== undefined) {
            hideClearBtn();
        }

        if (!$input.hasClass(ClassName.WITHOUT_CLEAR)) {
            $clearBtn = createClearBtn();
            $input.parent().append($clearBtn);
        }
    }

    function clearInput() {
        $input.val('');
    }

    function handleFocusIn({target}) {
        const $target = $(target);
        const $closestRoot = $target.closest(`.${ClassName.ROOT}`);

        activate($closestRoot);
    }

    function handleFocusOut({target}) {
        const $target = $(target);
        const $closestRoot = $target.closest(`.${ClassName.ROOT}`);

        if (!isInput($target)) return;
        if (!isEmptyInput($target)) return;

        deactivate($closestRoot);
    }

    function handleInput({target}) {
        const $target = $(target);

        if (isEmptyInput($target)) {
            hideClearBtn($clearBtn);
        } else {
            showClearBtn($clearBtn);
        }
    }

    function handleClick({target}) {
        clearInput();
        deactivate($element);
        hideClearBtn($clearBtn);
    }
}