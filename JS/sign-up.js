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
    var num = document.forms['sign']['num'].value;
    if(num.length == 0){
        document.getElementById('result').innerText = ' - Số điện thoại không được để trống.'
        return false;
    }
    var pass = document.forms['sign']['pass'].value;
    if(pass.length == 0){
        document.getElementById('result').innerText = ' - Mật khẩu không được để trống.'
        return false;
    }
    var repass = document.forms['sign']['repass'].value;
    if(repass.length == 0){
        document.getElementById('result').innerText = ' - Lặp lại mật khẩu không được để trống.'
        return false;
    }
    if( pass !== repass){
        document.getElementById('result').innerText = ' - Không giống mật khẩu.'
        return false;
    }

    count = 0;
    if(count == 0){
        document.getElementById('result').innerText = ' - Đăng nhập thành công.'
        return false;
    }
}