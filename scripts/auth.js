//auth durumunu izle
auth.onAuthStateChanged(k => {
    //console.log(k);
    if (k) {
        console.log("Giriş işlemi başarılı!");
        //verileri getir
        db.collection('makaleler').get().then(snapshot => {
            //console.log(snapshot.docs);
            makaleYukle(snapshot.docs);
        });
    } else {
        console.log("Çıkış işlemi başarılı!");
    }
});


//üyelik oluştur
const uyelikForm = document.querySelector('#signup-form');
uyelikForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //mail değeri
    const mail = uyelikForm['signup-email'].value;
    //parola değeri
    const password = uyelikForm['signup-password'].value;

    //mail ve parola ile yeni kullanıcı oluştur
    auth.createUserWithEmailAndPassword(mail, password).then(sonuc => {
        console.log(sonuc.user)
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        uyelikForm.reset();
    });

});


//çıkış işlemi
const cikis = document.querySelector('#logout');
cikis.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        //console.log('Çıkış işlemi başarılı');
    });
})


//giriş işlemi
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const mail = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(mail, password).then((sonuc) => {
        //console.log(sonuc.user);
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });
});