$(function () {

    $('#login').click(function () {
        navToLogin();
    });

    $('#registrar').click(function () {
        var strUser = $('#username').val();
        var strEmail = $('#email').val();
        var strPass = $('#password').val();
        var strConfirmPass = $('#confirmpassword').val();

        var obj = {
            username: strUser,
            email: strEmail,
            password: strPass,
            confirmpassword: strConfirmPass
        }

        registrar(obj)
            .then(function (text) {
                alert(text);
                $("#frmRegistrar")[0].reset();
            })
            .catch(function (mensagem) {
                alert(mensagem);
            });
    });

    function registrar(obj) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:63822/api/registrar');
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(obj));
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    }
                    else {
                        reject(xhr.responseText);
                    }
                }
            }
        });
    }

    function navToLogin() {
        window.location.href = "/login.html";
    }
});