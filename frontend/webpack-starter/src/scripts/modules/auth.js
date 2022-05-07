const ClassName = {
    ROOT: 'js-auth-modal',
    MODAL: 'js-auth-modal',
    MODAL_CLOSE: 'js-modal-close',
    TRIGGER: 'js-open-auth-modal'
};

export default function authSystem() {
    const $modalOpenButton = $(`.${ClassName.TRIGGER}`);
    const $modal = $(`.${ClassName.MODAL}`);
    const $modalCloseButton = $modal.find(`.${ClassName.MODAL_CLOSE}`);
    const $modalWindow = $modal.remodal();

    $modalOpenButton.on('click', handleTriggerClick);
    $modalCloseButton.on('click', handleCloseButtonClick);

    function handleCloseButtonClick() {
        closeModal();
    }

    function handleTriggerClick() {
        openModal();
    }

    function openModal() {
        $modalWindow.open();
    }

    function closeModal() {
        $modalWindow.close(e => {
            e.preventDefault();
        });
    }
}
