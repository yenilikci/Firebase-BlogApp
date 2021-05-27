const makaleler = document.querySelector('.guides');
const cikisLinkleri = document.querySelectorAll('.logged-out');
const girisLinkleri = document.querySelectorAll('.logged-in');

const uyelikDetaylari = document.querySelector('.account-details');

const kullaniciYukle = (kullanici) => {
    if (kullanici) {
        let html = `
            <div>Kullanıcı mail: <b>${kullanici.email}</b></div>
        `;
        uyelikDetaylari.innerHTML = html;
        girisLinkleri.forEach(item => {
            item.style.display = 'block';
        })
        cikisLinkleri.forEach(item => {
            item.style.display = 'none !important';
        });
    } else {
        uyelikDetaylari.innerHTML = '';
        girisLinkleri.forEach(item => {
            item.style.display = 'none';
        });
        cikisLinkleri.forEach(item => {
            item.style.display = 'block';
        });
    }
}


const makaleYukle = (data) => {
    if (data.length) {
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
    } else {
        makaleler.innerHTML = '<h5 class="card center-align" style="padding:20px;">Makaleler için giriş yapınız!</h5>';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var articles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(articles);
})