const $document = $('document');

chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
    const respond = () => {
        const board = $(`iframe[src*='boards.greenhouse.io']`);
        if (board.length) {
            window.open(board.first().attr('src'));
        }
        sendResponse(board.length ? 'Successfully opened job board.' : 'No embedded greenhouse.io content was found.');
    };
    if (request.action !== 'apply') {
        sendResponse({ status: `Incorrect message action '${request.action}' provided.` });
        return;
    }
    if (document.readyState === 'complete') {
        respond();
        return;
    }
    $document.ready(respond);
});