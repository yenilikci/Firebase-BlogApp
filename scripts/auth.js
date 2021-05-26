//üyelik oluştur
const uyelikForm = document.querySelector('#signup-form');
uyelikForm.addEventListener('submit',(e) => {
    e.preventDefault();
    //mail değeri
    const mail = uyelikForm['signup-email'].value;
    //parola değeri
    const password = uyelikForm['signup-password'].value;

    //mail ve parola ile yeni kullanıcı oluştur
    auth.createUserWithEmailAndPassword(mail,password).then(sonuc => {
        console.log(sonuc.user)
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        uyelikForm.reset();
    });

});