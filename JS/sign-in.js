function checkForm() {
    var count = 1;
    var email = document.forms['sign']['email'].value;
    var checkMau = email.indexOf('@');
    if(email.length == 0){
        document.getElementById('result').innerHTML = `<p> - Email không được để trống.</p>`;
        return false;
    }
    if(checkMau == -1){
        document.getElementById('result').innerHTML = `<p> - Sai định dạng Email.</p>`;
    }
    var pass = document.forms['sign']['pass'].value;
    if(pass.length == 0){
        document.getElementById('result').innerText = ' - Mật khẩu không được để trống.'
        return false;
    }
    count = 0;
    if(count == 0){
        document.getElementById('result').innerText = ' - Đăng nhập thành công.'
        return false;
    }
}