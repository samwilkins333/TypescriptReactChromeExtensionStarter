$('document').ready(function () {
    const board = $(`iframe[src*='boards.greenhouse.io']`);
    if (board.length) {
        window.open(board.first().attr('src'));
    }
});