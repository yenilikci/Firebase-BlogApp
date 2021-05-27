const makaleler = document.querySelector('.guides');

const makaleYukle = (data) => {
    let html = '';
    data.forEach(doc => {
        const makale = doc.data();
        //console.log(makale);
        const li = `
        <li>
            <div class="collapsible-header grey lighten-4">${makale.baslik}</div>
            <div class="collapsible-body white">${makale.icerik}</div>
        </li>
        `;
        html += li;
    });
    makaleler.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function () {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var articles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(articles);
})