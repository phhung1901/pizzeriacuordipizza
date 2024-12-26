function MostraDivOp(nomeDiv) {
    try {
        var divOpe = document.getElementById(nomeDiv);
        if (divOpe != null)
            divOpe.style.display = '';

    }
    catch (e) {
        alert(e);
    }
}

function NascondiDivOp(nomeDiv) {
    try {
        var divOpe = document.getElementById(nomeDiv);
        if (divOpe != null)
            divOpe.style.display = 'none';

    }
    catch (e) {
        alert(e);
    }
}
function isEmail(string) {
    //if (string.search(/^\w+((-\w+)|(\.\w+))*\@\w+((\.|-)\w+)*\.\w+$/) != -1)
    //    return 1;
    //else
    //    return 0;

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(string) == true)
        return 1;
    else
        return 0;
}
String.prototype.trim = function () {
    return this.replace(/^\s*/, "").replace(/\s*$/, "");
}
function loginAreaRiservata() {
    try {
        var email = document.getElementById("emailLogin").value.trim();
        var pwd = document.getElementById("pwdLogin").value.trim();

        if (email == "") {
            alert("Email obbligatorio");
            document.getElementById("emailLogin").focus();
            return false;
        }
        if (pwd == "") {
            alert("Password obbligatoria");
            document.getElementById("pwdLogin").focus();
            return false;
        }
        if (!checkLoginAreaRiservata(email, pwd)) {
            alert("Utente o Password non Validi!");
            return false;
        }

        location.href = "areariservata.php";

    }
    catch (e) {
        alert(e);
        return false;
    }
}
function createRequestObj() {
    if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHttp");
    } else {
        xhr = new XMLHttpRequest();
    }
    return xhr;
}
function checkLoginAreaRiservata(userName, password) {

    try {

        var xmlHttp = createRequestObj();        
        xmlHttp.open("POST", "loginAreaRiservata.php", false);
        
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        parametriScript = "emailLogin=" + userName + "&pwdLogin=" + password;
        var checkLogin = xmlHttp.send(parametriScript);
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                if (xmlHttp.responseText == "OK")
                    return true;
                else {
                    return false;
                }
            }
        }
        return false;
    }
    catch (e) {
        alert('Impossibile contattare la pagina di verfica login!');
        return false;
    }
}
function setDesktopView(desktopView) {

    try {

        var xmlHttp = createRequestObj();
        xmlHttp.open("POST", "viewMode.php", false);

        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        
        parametriScript = desktopView == "S" ? "desktopView=" + desktopView : "";
        xmlHttp.send(parametriScript);
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                if (xmlHttp.responseText == "OK") {
                    document.location.reload();
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        return false;
    }
    catch (e) {
        alert('Impossibile contattare la pagina di cambio modalita visualizzazione!');
        return false;
    }
}