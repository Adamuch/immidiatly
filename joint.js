function downloadBooks() {
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('GET', 'book.json', true)