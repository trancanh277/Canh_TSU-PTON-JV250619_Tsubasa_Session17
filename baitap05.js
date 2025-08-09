function login() {
let usernameInput = document.getElementById("username").value;
let passwordInput = document.getElementById("password").value;
let fixusername = "huanrose@gmail.com";
let fixpassword = "123456";
if (usernameInput === fixusername && passwordInput === fixpassword) {
    alert("Bạn đã đăng nhập thành công");
}
else {
    alert("Đăng nhập thất bại. Mời nhập lại");
}
}
