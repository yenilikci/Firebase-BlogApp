document.addEventListener('DOMContentLoaded',function() {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var articles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(articles);
})