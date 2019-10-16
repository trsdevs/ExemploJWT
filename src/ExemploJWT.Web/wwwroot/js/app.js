$(function () {

    $('#sair').click(function () {
        localStorage.removeItem("apptoken");
        navToLogin();
    });

    $('#exibToken').click(function () {
        alert(localStorage.getItem("apptoken"))
    });

    function getHome(strToken) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:63822/api/home');
            xhr.setRequestHeader("Authorization", "Bearer " + strToken);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    }
                    else {
                        var text = xhr.status === 401 ? "Necessario realizar login na aplicacao" : "Ocorreu um erro durante o processamento";
                        reject(text);
                    }
                }
            }
        });
    }

    function navToLogin() {
        window.location.href = "/login.html";
    }

    function init() {
        var strToken = localStorage.getItem("apptoken");
        if (strToken) {
            getHome(strToken)
                .then(function (text) {
                    $('#app-text').append(text);
                })
                .catch(function (mensagem) {
                    alert(mensagem);
                    navToLogin();
                });
        }
        else {
            navToLogin();
        }
    }

    init();
});