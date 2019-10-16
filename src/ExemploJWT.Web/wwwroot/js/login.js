$(function () {

    $('#registrar').click(function () {
        navToRegistrar();
    });

    $('#logon').click(function () {
        var strUser = $('#username').val();
        var strPass = $('#password').val();
        logon(strUser, strPass)
            .then(function (text) {
                localStorage.setItem("apptoken", text);
                window.location.href = "http://localhost:59979/";
            })
            .catch(function (mensagem) {
                alert(mensagem);
            });
    });

    function logon(strUser, strPass) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:63822/api/login');
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({ username: strUser, password: strPass }));
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

    function navToRegistrar() {
        window.location.href = "/registrar.html";
    }
});