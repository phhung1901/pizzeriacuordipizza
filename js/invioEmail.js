
function inviaCommentoProdottoJS() {
    try {
        var idProdotto = document.forms["frmInviaEmailProdotto"]["idProdotto"].value.trim();
        var nomecognome = document.forms["frmInviaEmailProdotto"]["nomecognome"].value.trim();
        var titolo = document.forms["frmInviaEmailProdotto"]["titolo"].value.trim();
        var commento = document.forms["frmInviaEmailProdotto"]["commento"].value.trim();
        var email = document.forms["frmInviaEmailProdotto"]["email"].value.trim();
        var infor = document.forms["frmInviaEmailProdotto"]["informativa"].checked;
        var nobot = document.forms["frmInviaEmailProdotto"]["NOBOT"].checked;

        //var rating = "";
        //for (i = 0; i < document.getElementsByName('rating').length; i++) {
        //    if (document.getElementsByName('rating')[i].checked) {
        //        rating = document.getElementsByName('rating')[i].value;
        //    }
        //}
                
        if (idProdotto == "") {
            alert(msg_prodotto_obbl);
            return false;
        }
        if (nomecognome == "") {
            alert(msg_nome_obbl);
            document.forms["frmInviaEmailProdotto"]["nomecognome"].focus();
            return false;
        }
        if (email == "") {
            alert(msg_email_obbl);
            document.forms["frmInviaEmailProdotto"]["email"].focus();
            return false;
        }
        if (!isEmail(email)) {
            alert(msg_email_valido);
            document.forms["frmInviaEmailProdotto"]["email"].focus();
            return false;
        }

        if (titolo == "") {
            alert(msg_titolo_obbl);
            document.forms["frmInviaEmailProdotto"]["titolo"].focus();
            return false;
        }
        if (commento == "") {
            alert(msg_testo_obbl);
            document.forms["frmInviaEmailProdotto"]["commento"].focus();
            return false;
        }
        if (commento.toLowerCase().indexOf("http:") !== -1) {
            alert(msg_testo_indirizzi);
            document.forms["frmInviaEmailProdotto"]["commento"].focus();
            return false;
        }
        if (!infor) {
            alert(msg_accetta_informativa);
            document.forms["frmInviaEmailProdotto"]["informativa"].focus();
            return false;
        }
        if (nobot != "") {
            alert(msg_codice_controllo);
            return false;
        }
        //////if (Recaptcha.get_response() == "") {
        //////    alert(msg_codice_contr_obbl);
        //////    return false;
        //////}

        //////if (!whenUserClickOnTheSubmitForum(true)) {
        //////    alert(msg_codice_controllo);
        //////    return false;
        //////}

        var form = document.getElementById("frmInviaEmailProdotto");
        form.action = document.forms["frmInviaEmailProdotto"]["actionTo"].value;
        form.submit();
    }
    catch (e) {
        alert(e);
        return false;
    }
}

function inviaRichiestaInfoProdottoJS_IMM() {
    try {
        var idProdotto = document.forms["frmInviaEmailInfoProdotto"]["idProdotto"].value.trim();
        var nomecognome = document.forms["frmInviaEmailInfoProdotto"]["nomecognome"].value.trim();
        var commento = document.forms["frmInviaEmailInfoProdotto"]["commento"].value.trim();
        var email = document.forms["frmInviaEmailInfoProdotto"]["email"].value.trim();
        var infor = document.forms["frmInviaEmailInfoProdotto"]["informativa"].checked;
        var nobot = document.forms["frmInviaEmailInfoProdotto"]["NOBOT"].checked;

        if (idProdotto == "") {
            alert(msg_prodotto_obbl);
            return false;
        }
        if (nomecognome == "") {
            alert(msg_nome_obbl);
            document.forms["frmInviaEmailInfoProdotto"]["nomecognome"].focus();
            return false;
        }
        if (email == "") {
            alert(msg_email_obbl);
            document.getElementById("email").focus();
            return false;
        }
        if (!isEmail(email)) {
            alert(msg_email_valido);
            document.forms["frmInviaEmailInfoProdotto"]["email"].focus();
            return false;
        }
        if (commento == "") {
            alert(msg_testo_obbl);
            document.forms["frmInviaEmailInfoProdotto"]["commento"].focus();
            return false;
        }
        if (commento.toLowerCase().indexOf("http:") !== -1) {
            alert(msg_testo_indirizzi);
            document.forms["frmInviaEmailInfoProdotto"]["commento"].focus();
            return false;
        }
        if (!infor) {
            alert(msg_accetta_informativa);
            document.forms["frmInviaEmailInfoProdotto"]["informativa"].focus();
            return false;
        }
        if (nobot != "") {
            alert(msg_codice_controllo);
            return false;
        }

        var form = document.getElementById("frmInviaEmailInfoProdotto");
        form.action = document.forms["frmInviaEmailInfoProdotto"]["actionTo"].value;
        form.submit();

    }
    catch (e) {
        alert(e);
        return false;
    }
}

function inviaRichiestaInfoProdottoJS() {
    try {
        var idProdotto = document.forms["frmInviaEmailInfoProdotto"]["idProdotto"].value.trim();
        var nomecognome = document.forms["frmInviaEmailInfoProdotto"]["nomecognome"].value.trim();
        var commento = document.forms["frmInviaEmailInfoProdotto"]["commento"].value.trim();
        var email = document.forms["frmInviaEmailInfoProdotto"]["email"].value.trim();
        var infor = document.forms["frmInviaEmailInfoProdotto"]["informativa"].checked;
        var nobot = document.forms["frmInviaEmailInfoProdotto"]["NOBOT"].checked;

        if (idProdotto == "") {
            alert(msg_prodotto_obbl);
            return false;
        }
        if (nomecognome == "") {
            alert(msg_nome_obbl);
            document.forms["frmInviaEmailInfoProdotto"]["nomecognome"].focus();
            return false;
        }
        if (email == "") {
            alert(msg_email_obbl);
            document.getElementById("email").focus();
            return false;
        }
        if (!isEmail(email)) {
            alert(msg_email_valido);
            document.forms["frmInviaEmailInfoProdotto"]["email"].focus();
            return false;
        }
        if (commento == "") {
            alert(msg_testo_obbl);
            document.forms["frmInviaEmailInfoProdotto"]["commento"].focus();
            return false;
        }
        if (commento.toLowerCase().indexOf("http:") !== -1) {
            alert(msg_testo_indirizzi);
            document.forms["frmInviaEmailInfoProdotto"]["commento"].focus();
            return false;
        }
        if (!infor) {
            alert(msg_accetta_informativa);
            document.forms["frmInviaEmailInfoProdotto"]["informativa"].focus();
            return false;
        }
        if (nobot != "") {
            alert(msg_codice_controllo);
            return false;
        }

        var form = document.getElementById("frmInviaEmailInfoProdotto");
        form.action = document.forms["frmInviaEmailInfoProdotto"]["actionTo"].value;
        form.submit();

    }
    catch (e) {
        alert(e);
        return false;
    }
}
function inviaEmailJS_Contattaci()
{
    try
    {
        var nomecognome = document.getElementById("nomecognome").value.trim();
        var email = document.getElementById("email").value.trim();
        var numTel = document.getElementById("telefono").value.trim();
        //var provincia = document.getElementById("provincia").value.trim();
        provincia = "--";
        var messaggio = document.getElementById("message").value.trim();
        var infor = document.getElementById("informativa").checked;
        var nobot = document.getElementById("NOBOT").checked;

        //var rating = "";
        //for (i = 0; i < document.getElementsByName('rating').length; i++) {
        //    if (document.getElementsByName('rating')[i].checked) {
        //        rating = document.getElementsByName('rating')[i].value;
        //    }
        //}

        if (nomecognome == "") {
            alert(msg_nome_obbl);
            document.getElementById("nomecognome").focus();
            return false;
        }
        if (email == "") {
            alert(msg_email_obbl);
            document.getElementById("email").focus();
            return false;
        }
        if (!isEmail(document.getElementById("email").value)) {
            alert(msg_email_valido);
            document.getElementById("email").focus();
            return false;
        }
        if (numTel == "") {
            alert(msg_telefono_obbl);
            document.getElementById("telefono").focus();
            return false;
        }
        //if (provincia == "") {
        //    alert(msg_provincia_obbl);            
        //    document.getElementById("provincia").focus();
        //    return false;
        //}
        if (messaggio == "") {
            alert(msg_testo_obbl);
            document.getElementById("message").focus();
            return false;
        }
        if (messaggio.toLowerCase().indexOf("http:") !== -1) {
            alert(msg_testo_indirizzi);
            document.getElementById("message").focus();
            return false;
        }
        if (!infor) {
            alert(msg_accetta_informativa);
            document.getElementById("informativa").focus();
            return false;
        }
        if (nobot != "") {
            alert(msg_codice_controllo);
            return false;
        }
        /*
        if (Recaptcha.get_response() == "") {
            alert(msg_codice_contr_obbl);
            return false;
        }
        if (!whenUserClickOnTheSubmitForum(true)) {
            alert(msg_codice_controllo);
            return false;
        }
        */
        var form = document.getElementById("frmInviaEmailContattaci");
        form.action = document.forms["frmInviaEmailContattaci"]["actionTo"].value;
        form.submit();
    }
    catch (e) {
        alert(e);
        return false;
    }
}
function inviaEmailJS_DiconoDiNoi() {
    try {
        var nomecognome = document.getElementById("nomecognome").value.trim();
        var comeconosciuto = document.getElementById("comeconosciuto").value.trim();
        var messaggio = document.getElementById("message").value.trim();
        var infor = document.getElementById("informativa").checked;
        var emailute = document.getElementById("emailute").value.trim();
        var nobot = document.getElementById("NOBOT").checked;

        if (nomecognome == "") {
            alert(msg_nome_obbl);
            document.getElementById("nomecognome").focus();
            return false;
        }
        if (emailute == "") {
            alert(msg_email_obbl);
            document.getElementById("emailute").focus();
            return false;
        }
        if (!isEmail(document.getElementById("emailute").value)) {
            alert(msg_email_valido);
            document.getElementById("emailute").focus();
            return false;
        }
        if (messaggio == "") {
            alert(msg_testo_obbl);
            document.getElementById("message").focus();
            return false;
        }
        if (messaggio.toLowerCase().indexOf("http:") !== -1) {
            alert(msg_testo_indirizzi);
            document.getElementById("message").focus();
            return false;
        }
        if (!infor) {
            alert(msg_accetta_informativa);
            document.getElementById("informativa").focus();
            return false;
        }
        if (nobot != "") {
            alert(msg_codice_controllo);
            return false;
        }

        var form = document.getElementById("frmInviaEmailDiconoDiNoi");
        form.action = document.forms["frmInviaEmailDiconoDiNoi"]["actionTo"].value;
        form.submit();
    }
    catch (e) {
        alert(e);
        return false;
    }
}
function inviaEmailJS_DiconoDiNoiNoCaptha() {
    try {
        var nomecognome = document.getElementById("nomecognome").value.trim();
        var comeconosciuto = document.getElementById("comeconosciuto").value.trim();
        var messaggio = document.getElementById("message").value.trim();
        var infor = document.getElementById("informativa").checked;
        var emailute = document.getElementById("emailute").value.trim();
        var nobot = document.getElementById("NOBOT").checked;

        if (nomecognome == "") {
            alert(msg_nome_obbl);
            document.getElementById("nomecognome").focus();
            return false;
        }
        if (emailute == "") {
            alert(msg_email_obbl);
            document.getElementById("emailute").focus();
            return false;
        }
        if (!isEmail(document.getElementById("emailute").value)) {
            alert(msg_email_valido);
            document.getElementById("emailute").focus();
            return false;
        }
        if (messaggio == "") {
            alert(msg_testo_obbl);
            document.getElementById("message").focus();
            return false;
        }
        if (messaggio.toLowerCase().indexOf("http:") !== -1) {
            alert(msg_testo_indirizzi);
            document.getElementById("message").focus();
            return false;
        }
        if (!infor) {
            alert(msg_accetta_informativa);
            document.getElementById("informativa").focus();
            return false;
        }
        if (nobot != "") {
            alert(msg_codice_controllo);
            return false;
        }
        var form = document.getElementById("frmInviaEmailDiconoDiNoi");
        form.action = document.forms["frmInviaEmailDiconoDiNoi"]["actionTo"].value;
        form.submit();
    }
    catch (e) {
        alert(e);
        return false;
    }
}
function inviaEmailJS_PrenotazioneServizio() {
    try {
        var nomecognome = document.getElementById("prenServizio_nomecognome").value.trim();
        var email = document.getElementById("prenServizio_email").value.trim();
        var numTel = document.getElementById("prenServizio_telefono").value.trim();
        var indirizzo = document.getElementById("prenServizio_indirizzo").value.trim();
        var marca = document.getElementById("prenServizio_marca").value.trim();
        var modello = document.getElementById("prenServizio_modello").value.trim();        
        var messaggio = document.getElementById("prenServizio_note").value.trim();
        var data_pre = document.getElementById("prenServizio_data").value.trim();
        var ora_pre = document.getElementById("prenServizio_ora").value.trim();
        
        
        var infor = document.getElementById("informativa").checked;
        var nobot = document.getElementById("NOBOT").checked;

        if (data_pre == "") {
            alert(msg_data_obbl);
            document.getElementById("prenServizio_nomecognome").focus();
            return false;
        }
        if (ora_pre == "") {
            alert(msg_ora_obbl);
            document.getElementById("prenServizio_nomecognome").focus();
            return false;
        }

        if (nomecognome == "") {
            alert(msg_nome_obbl);
            document.getElementById("prenServizio_nomecognome").focus();
            return false;
        }
        if (indirizzo == "") {
            alert(msg_indirizzo_obbl);
            document.getElementById("prenServizio_indirizzo").focus();
            return false;
        }
        if (numTel == "") {
            alert(msg_telefono_obbl);
            document.getElementById("prenServizio_telefono").focus();
            return false;
        }
        if (email == "") {
            alert(msg_email_obbl);
            document.getElementById("prenServizio_email").focus();
            return false;
        }
        if (!isEmail(email)) {
            alert(msg_email_valido);
            document.getElementById("prenServizio_email").focus();
            return false;
        }


        //if (marca == "") {
        //    alert(msg_marca_obbl);
        //    document.getElementById("prenServizio_marca").focus();
        //    return false;
        //}
        //if (modello == "") {
        //    alert("Modello obbligatorio");
        //    document.getElementById("prenServizio_modello").focus();
        //    return false;
        //}
        //if (messaggio == "") {
        //    alert("Testo messaggio obbligatorio");
        //    document.getElementById("message").focus();
        //    return false;
        //}
        if (messaggio.toLowerCase().indexOf("http:") !== -1) {
            alert(msg_testo_indirizzi);
            document.getElementById("message").focus();
            return false;
        }
        if (!infor) {
            alert(msg_accetta_informativa);
            document.getElementById("informativa").focus();
            return false;
        }
        if (nobot != "") {
            alert(msg_codice_controllo);
            return false;
        }

        var form = document.getElementById("formPrenotazioneServizio");
        form.action = document.forms["formPrenotazioneServizio"]["actionTo"].value;
        form.submit();
    }
    catch (e) {
        alert(e);
        return false;
    }
}
function inviaEmailJS_PrenotazioneServizioNoCaptha() {
    try {
        var nomecognome = document.getElementById("prenServizio_nomecognome").value.trim();
        var email = document.getElementById("prenServizio_email").value.trim();
        var numTel = document.getElementById("prenServizio_telefono").value.trim();
        var indirizzo = document.getElementById("prenServizio_indirizzo").value.trim();
        var marca = document.getElementById("prenServizio_marca").value.trim();
        var modello = document.getElementById("prenServizio_modello").value.trim();
        var messaggio = document.getElementById("prenServizio_note").value.trim();
        var data_pre = document.getElementById("prenServizio_data").value.trim();
        var ora_pre = document.getElementById("prenServizio_ora").value.trim();


        var infor = document.getElementById("informativa").checked;
        var nobot = document.getElementById("NOBOT").checked;

        if (data_pre == "") {
            alert(msg_data_obbl);
            document.getElementById("prenServizio_nomecognome").focus();
            return false;
        }
        if (ora_pre == "") {
            alert(msg_ora_obbl);
            document.getElementById("prenServizio_nomecognome").focus();
            return false;
        }

        if (nomecognome == "") {
            alert(msg_nome_obbl);
            document.getElementById("prenServizio_nomecognome").focus();
            return false;
        }
        if (indirizzo == "") {
            alert(msg_indirizzo_obbl);
            document.getElementById("prenServizio_indirizzo").focus();
            return false;
        }
        if (numTel == "") {
            alert(msg_telefono_obbl);
            document.getElementById("prenServizio_telefono").focus();
            return false;
        }
        if (email == "") {
            alert(msg_email_obbl);
            document.getElementById("prenServizio_email").focus();
            return false;
        }
        if (!isEmail(email)) {
            alert(msg_email_valido);
            document.getElementById("prenServizio_email").focus();
            return false;
        }


        //if (marca == "") {
        //    alert(msg_marca_obbl);
        //    document.getElementById("prenServizio_marca").focus();
        //    return false;
        //}
        //if (modello == "") {
        //    alert("Modello obbligatorio");
        //    document.getElementById("prenServizio_modello").focus();
        //    return false;
        //}
        //if (messaggio == "") {
        //    alert("Testo messaggio obbligatorio");
        //    document.getElementById("message").focus();
        //    return false;
        //}
        if (messaggio.toLowerCase().indexOf("http:") !== -1) {
            alert(msg_testo_indirizzi);
            document.getElementById("message").focus();
            return false;
        }
        if (!infor) {
            alert(msg_accetta_informativa);
            document.getElementById("informativa").focus();
            return false;
        }
        if (nobot != "") {
            alert(msg_codice_controllo);
            return false;
        }

        var form = document.getElementById("formPrenotazioneServizio");
        form.action = document.forms["formPrenotazioneServizio"]["actionTo"].value;
        form.submit();
    }
    catch (e) {
        alert(e);
        return false;
    }
}
function inviaEmailJS_Widget_Contattaci() {
    try {
        var nomecognome = document.getElementById("widgetCont_nomecognome").value.trim();
        var email = document.getElementById("widgetCont_email").value.trim();
        var numTel = document.getElementById("widgetCont_telefono").value.trim();
        var indirizzo = document.getElementById("widgetCont_indirizzo").value.trim();
        var messaggio = document.getElementById("widgetCont_note").value.trim();


        var infor = document.getElementById("informativa").checked;
        var nobot = document.getElementById("NOBOT").checked;

        if (nomecognome == "") {
            alert(msg_nome_obbl);
            document.getElementById("widgetCont_nomecognome").focus();
            return false;
        }
        if (email == "") {
            alert(msg_email_obbl);
            document.getElementById("widgetCont_email").focus();
            return false;
        }
        if (email != "" && !isEmail(email)) {
            alert(msg_email_valido);
            document.getElementById("widgetCont_email").focus();
            return false;
        }
        //if (numTel == "") {
        //    alert(msg_telefono_obbl);
        //    document.getElementById("widgetCont_telefono").focus();
        //    return false;
        //}
        //if (indirizzo == "") {
        //    alert(msg_indirizzo_obbl);
        //    document.getElementById("widgetCont_indirizzo").focus();
        //    return false;
        //}
        if (messaggio == "") {
            alert(msg_testo_obbl);
            document.getElementById("widgetCont_note").focus();
            return false;
        }
        if (messaggio.toLowerCase().indexOf("http:") !== -1) {
            alert(msg_testo_indirizzi);
            document.getElementById("widgetCont_note").focus();
            return false;
        }
        if (!infor) {
            alert(msg_accetta_informativa);
            document.getElementById("informativa").focus();
            return false;
        }
        if (nobot != "") {
            alert(msg_codice_controllo);
            return false;
        }

        var form = document.getElementById("formBoxContattaci");
        form.action = document.forms["formBoxContattaci"]["actionTo"].value;
        form.submit();
    }
    catch (e) {
        alert(e);
        return false;
    }
}
function inviaEmailJS_Widget_ContattaciNoCaptha() {
    try {
        var nomecognome = document.getElementById("widgetCont_nomecognome").value.trim();
        var email = document.getElementById("widgetCont_email").value.trim();
        var numTel = document.getElementById("widgetCont_telefono").value.trim();
        var indirizzo = document.getElementById("widgetCont_indirizzo").value.trim();
        var messaggio = document.getElementById("widgetCont_note").value.trim();


        var infor = document.getElementById("informativa").checked;
        var nobot = document.getElementById("NOBOT").checked;

        if (nomecognome == "") {
            alert(msg_nome_obbl);
            document.getElementById("widgetCont_nomecognome").focus();
            return false;
        }
        if (email == "") {
            alert(msg_email_obbl);
            document.getElementById("widgetCont_email").focus();
            return false;
        }
        if (email != "" && !isEmail(email)) {
            alert(msg_email_valido);
            document.getElementById("widgetCont_email").focus();
            return false;
        }
        //if (numTel == "") {
        //    alert(msg_telefono_obbl);
        //    document.getElementById("widgetCont_telefono").focus();
        //    return false;
        //}
        //if (indirizzo == "") {
        //    alert(msg_indirizzo_obbl);
        //    document.getElementById("widgetCont_indirizzo").focus();
        //    return false;
        //}
        if (messaggio == "") {
            alert(msg_testo_obbl);
            document.getElementById("widgetCont_note").focus();
            return false;
        }
        if (messaggio.toLowerCase().indexOf("http:") !== -1) {
            alert(msg_testo_indirizzi);
            document.getElementById("widgetCont_note").focus();
            return false;
        }
        if (!infor) {
            alert(msg_accetta_informativa);
            document.getElementById("informativa").focus();
            return false;
        }
        if (nobot != "") {
            alert(msg_codice_controllo);
            return false;
        }

        var form = document.getElementById("formBoxContattaci");
        form.action = document.forms["formBoxContattaci"]["actionTo"].value;
        form.submit();
    }
    catch (e) {
        alert(e);
        return false;
    }
}
function eseguiFiltroRicercaJS(numPagina) {
    try {
        var cmbContratto = document.forms["frmRicercaProdottiImm"]["cmbContratto"].value.trim();
        var cmbTipologia = document.forms["frmRicercaProdottiImm"]["cmbTipologia"].value.trim();
        var cmbLocalita = document.forms["frmRicercaProdottiImm"]["cmbLocalita"].value.trim();
        var filtroMQ = document.forms["frmRicercaProdottiImm"]["filtroMQ"].value.trim();
        var filtroPMin = document.forms["frmRicercaProdottiImm"]["filtroPMin"].value.trim();
        var filtroPMax = document.forms["frmRicercaProdottiImm"]["filtroPMax"].value.trim();
        var filtroIdImm = document.forms["frmRicercaProdottiImm"]["filtroIDIMM"].value.trim();
                
        var orderBy = document.getElementById('cmbOrderby').value;
        var numItemXPagina = document.getElementById('cmbItemXPagina').value;
        
        if (filtroIdImm === "") {
            var valore = cmbContratto + ";" + cmbTipologia + ";" + cmbLocalita + ";" + filtroMQ + ";" + filtroPMin + ";" + filtroPMax + ";" + numPagina + ";" + numItemXPagina + ";" + orderBy + ";" + filtroIdImm;
            document.forms["frmRicercaProdottiImm"]["valore"].value = valore;

            var form = document.getElementById("frmRicercaProdottiImm");
            form.action = document.forms["frmRicercaProdottiImm"]["actionTo"].value;
            form.submit();
        }
        else {
            var valore = filtroIdImm;
            document.forms["frmRicercaProdottiImm"]["valore"].value = valore;
            document.forms["frmRicercaProdottiImm"]["chiave"].value = "id";

            var form = document.getElementById("frmRicercaProdottiImm");
            form.action = 'prodottoimm.php?chiave=id&valore='+valore;
            form.submit();
        }
    }
    catch (e) {
        alert(e);
        return false;
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
function loadFunc() {
    try
    {
        if (typeof (showRecaptcha) == "function")
            showRecaptcha('recaptcha_widget');
    }
    catch (e) {        
        return false;
    }
}
function loadFunc1() {
    try
    {
        if (typeof (showRecaptcha) == "function")
            showRecaptcha('recaptcha_widget_1');
    }
    catch (e) {        
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


/*funzioni per RDV*/
function eseguiFiltroRicercaDefuntiJS(numPagina) {
    try {
        var defunto = document.forms["frmRicercaDefunti"]["filtrodefunto"].value.trim();

        var valore = defunto + ";" + numPagina;
        document.forms["frmRicercaDefunti"]["valore"].value = valore;

        var form = document.getElementById("frmRicercaDefunti");
        form.action = document.forms["frmRicercaDefunti"]["actionTo"].value;
        form.submit();
    }
    catch (e) {
        alert(e);
        return false;
    }
}

function inviaRichiestaSalutoDefuntoJS() {
    try {
        var idDefunto = document.forms["frmInviaEmailSaluto"]["idDefunto"].value.trim();
        var nomecognome = document.forms["frmInviaEmailSaluto"]["nomecognome"].value.trim();
        var commento = document.forms["frmInviaEmailSaluto"]["commento"].value.trim();
        var email = document.forms["frmInviaEmailSaluto"]["email"].value.trim();
        var infor = document.forms["frmInviaEmailSaluto"]["informativa"].checked;
        var nobot = document.forms["frmInviaEmailSaluto"]["NOBOT"].checked;

        if (idDefunto == "") {
            alert("Defunto obbligatorio");
            return false;
        }
        if (nomecognome == "") {
            alert(msg_nome_obbl);
            document.forms["frmInviaEmailSaluto"]["nomecognome"].focus();
            return false;
        }
        if (email == "") {
            alert(msg_email_obbl);
            document.getElementById("email").focus();
            return false;
        }
        if (!isEmail(email)) {
            alert(msg_email_valido);
            document.forms["frmInviaEmailSaluto"]["email"].focus();
            return false;
        }
        if (commento == "") {
            alert(msg_testo_obbl);
            document.forms["frmInviaEmailSaluto"]["commento"].focus();
            return false;
        }
        if (commento.toLowerCase().indexOf("http:") !== -1) {
            alert(msg_testo_indirizzi);
            document.forms["frmInviaEmailSaluto"]["commento"].focus();
            return false;
        }
        if (!infor) {
            alert(msg_accetta_informativa);
            document.forms["frmInviaEmailSaluto"]["informativa"].focus();
            return false;
        }
        if (nobot != "") {
            alert(msg_codice_controllo);
            return false;
        }
        var form = document.getElementById("frmInviaEmailSaluto");
        form.action = document.forms["frmInviaEmailSaluto"]["actionTo"].value;
        form.submit();

    }
    catch (e) {
        alert(e);
        return false;
    }
}

/*fine funzioni per RDV*/

function inviaEmailJS_Widget_TraslocoAbitazione() {
    try {

        var form = document.getElementById("formBoxTraslocoAbitazione");

        var provincia = form.elements["widgettrasl_provincia"].value;
        var provincia_to = form.elements["widgettrasl_provincia_to"].value;

        var citta = form.elements["widgettrasl_citta"].value;
        var citta_to = form.elements["widgettrasl_citta_to"].value;

        var indirizzo = form.elements["widgettrasl_indirizzo"].value;
        var indirizzo_to = form.elements["widgettrasl_indirizzo_to"].value;

        var piano = form.elements["widgettrasl_piano"].value;
        var piano_to = form.elements["widgettrasl_piano_to"].value;

        var ascensore = form.elements["widgettrasl_ascensore"].value;
        var ascensore_to = form.elements["widgettrasl_ascensore_to"].value;

        var dal = form.elements["widgettrasl_dal"].value;
        var al = form.elements["widgettrasl_al"].value;
        var nome = form.elements["widgettrasl_nome"].value;
        var cognome = form.elements["widgettrasl_cognome"].value;
        var email = form.elements["widgettrasl_email"].value;
        var telefono = form.elements["widgettrasl_telefono"].value;
        var cellulare = form.elements["widgettrasl_cellulare"].value;


        var qta_ingresso = form.elements["widgettrasl_ingresso"].value;
        var qta_cameraospite = form.elements["widgettrasl_cameraospite"].value;
        var qta_corridoio = form.elements["widgettrasl_corridoio"].value;
        var qta_saladapranzo = form.elements["widgettrasl_saladapranzo"].value;
        var qta_salotto = form.elements["widgettrasl_salotto"].value;
        var qta_entrata = form.elements["widgettrasl_entrata"].value;
        var qta_tinello = form.elements["widgettrasl_tinello"].value;
        var qta_cantina = form.elements["widgettrasl_cantina"].value;
        var qta_mansarda = form.elements["widgettrasl_mansarda"].value;
        var qta_matrimoniale = form.elements["widgettrasl_matrimoniale"].value;
        var qta_cameretta = form.elements["widgettrasl_cameretta"].value;
        var qta_soggiorno = form.elements["widgettrasl_soggiorno"].value;
        var qta_cucina = form.elements["widgettrasl_cucina"].value;
        var qta_bagno = form.elements["widgettrasl_bagno"].value;
        var qta_ripostiglio = form.elements["widgettrasl_ripostiglio"].value;
        var qta_taverna = form.elements["widgettrasl_taverna"].value;
        var qta_solaio = form.elements["widgettrasl_solaio"].value;
        var qta_box = form.elements["widgettrasl_box"].value;

        var metriquadri = form.elements["widgettrasl_metri_quadri"].value;
        var particolarita = form.elements["widgettrasl_particolarita"].value;

        var impedimenti = form.elements["widgettrasl_impedimenti"].value;
        var impedimenti_to = form.elements["widgettrasl_impedimenti_to"].value;

        var autorizzazioni = form.elements["widgettrasl_autorizzazioni"].value;
        var autorizzazioni_to = form.elements["widgettrasl_autorizzazioni_to"].value;


        var caratteristiche = form.elements["widgettrasl_caratteristiche"].value;
        var deposito = form.elements["widgettrasl_deposito"].value;
        var imballaggio = form.elements["widgettrasl_imballaggio"].value;

        var infor = form.elements["widgettrasl_informativa"].checked;
        var nobot = form.elements["NOBOT"].checked;

        var oksubmit = true;

        if (provincia == "") {
            form.elements["widgettrasl_provincia"].focus();
            form.elements["widgettrasl_provincia"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_provincia"].style.borderColor = "";
        }

        if (provincia_to == "") {
            form.elements["widgettrasl_provincia_to"].focus();
            form.elements["widgettrasl_provincia_to"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_provincia_to"].style.borderColor = "";
        }

        if (citta == "") {
            form.elements["widgettrasl_citta"].focus();
            form.elements["widgettrasl_citta"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_citta"].style.borderColor = "";
        }

        if (citta_to == "") {
            form.elements["widgettrasl_citta_to"].focus();
            form.elements["widgettrasl_citta_to"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_citta_to"].style.borderColor = "";
        }

        if (dal == "") {
            form.elements["widgettrasl_dal"].focus();
            form.elements["widgettrasl_dal"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_dal"].style.borderColor = "";
        }

        if (al == "") {
            form.elements["widgettrasl_al"].focus();
            form.elements["widgettrasl_al"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_al"].style.borderColor = "";
        }

        if (nome == "") {
            form.elements["widgettrasl_nome"].focus();
            form.elements["widgettrasl_nome"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_nome"].style.borderColor = "";
        }

        if (cognome == "") {
            form.elements["widgettrasl_cognome"].focus();
            form.elements["widgettrasl_cognome"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_cognome"].style.borderColor = "";
        }

        if (email == "") {
            form.elements["widgettrasl_email"].focus();
            form.elements["widgettrasl_email"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_email"].style.borderColor = "";
        }


        if (particolarita.toLowerCase().indexOf("http:") !== -1) {
            alert(msg_testo_indirizzi);
            form.elements["widgettrasl_particolarita"].focus();
            oksubmit = false;
        }

        if (!oksubmit) return false;

        if (!isEmail(email)) {
            alert(msg_email_valido);
            form.elements["widgettrasl_email"].focus();
            form.elements["widgettrasl_email"].style.borderColor = "red";
            return false;
        }

        if (!infor) {
            alert(msg_accetta_informativa);
            form.elements["widgettrasl_informativa"].focus();
            return false;
        }
        if (nobot != "") {
            alert(msg_codice_controllo);
            return false;
        }
        //if (!whenUserClickOnTheSubmitForum(true)) {
        //    alert(msg_codice_controllo);
        //    return false;
        //}

        form.action = document.forms["formBoxTraslocoAbitazione"]["actionTo"].value;
        form.submit();
    }
    catch (e) {
        alert(e);
        return false;
    }
}

function inviaEmailJS_Widget_TraslocoUfficio() {
    try {

        var form = document.getElementById("formBoxTraslocoUfficio");

        var provincia = form.elements["widgettrasl_provincia"].value;
        var provincia_to = form.elements["widgettrasl_provincia_to"].value;

        var citta = form.elements["widgettrasl_citta"].value;
        var citta_to = form.elements["widgettrasl_citta_to"].value;

        var indirizzo = form.elements["widgettrasl_indirizzo"].value;
        var indirizzo_to = form.elements["widgettrasl_indirizzo_to"].value;

        var piano = form.elements["widgettrasl_piano"].value;
        var piano_to = form.elements["widgettrasl_piano_to"].value;

        var ascensore = form.elements["widgettrasl_ascensore"].value;
        var ascensore_to = form.elements["widgettrasl_ascensore_to"].value;

        var dal = form.elements["widgettrasl_dal"].value;
        var al = form.elements["widgettrasl_al"].value;
        var nomeazienda = form.elements["widgettrasl_nome_azienda"].value;
        var email = form.elements["widgettrasl_email"].value;
        var telefono = form.elements["widgettrasl_telefono"].value;
        var cellulare = form.elements["widgettrasl_cellulare"].value;


        var qta_tavriunione = form.elements["widgettrasl_tavriunione"].value;
        var qta_sedie = form.elements["widgettrasl_sedie"].value;
        var qta_armadi = form.elements["widgettrasl_armadi"].value;
        var qta_postlav = form.elements["widgettrasl_postlav"].value;
        var qta_divani = form.elements["widgettrasl_divani"].value;
        var qta_poltrone = form.elements["widgettrasl_poltrone"].value;
        var qta_postlavdir = form.elements["widgettrasl_postlavdir"].value;
        var qta_fotocopiatrici = form.elements["widgettrasl_fotocopiatrici"].value;
        var qta_stampanti = form.elements["widgettrasl_stampanti"].value;
        var qta_computer = form.elements["widgettrasl_computer"].value;
        var qta_cassaforti = form.elements["widgettrasl_cassaforti"].value;
        var qta_armadi_blindati = form.elements["widgettrasl_armadi_blindati"].value;
        
        var metriquadri = form.elements["widgettrasl_metri_quadri"].value;
        var particolarita = form.elements["widgettrasl_particolarita"].value;

        var impedimenti = form.elements["widgettrasl_impedimenti"].value;
        var impedimenti_to = form.elements["widgettrasl_impedimenti_to"].value;

        var autorizzazioni = form.elements["widgettrasl_autorizzazioni"].value;
        var autorizzazioni_to = form.elements["widgettrasl_autorizzazioni_to"].value;


        var caratteristiche = form.elements["widgettrasl_caratteristiche"].value;
        var deposito = form.elements["widgettrasl_deposito"].value;
        var imballaggio = form.elements["widgettrasl_imballaggio"].value;

        var infor = form.elements["widgettrasl_informativa"].checked;
        var nobot = form.elements["NOBOT"].checked;

        var oksubmit = true;

        if (provincia == "") {
            form.elements["widgettrasl_provincia"].focus();
            form.elements["widgettrasl_provincia"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_provincia"].style.borderColor = "";
        }

        if (provincia_to == "") {
            form.elements["widgettrasl_provincia_to"].focus();
            form.elements["widgettrasl_provincia_to"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_provincia_to"].style.borderColor = "";
        }

        if (citta == "") {
            form.elements["widgettrasl_citta"].focus();
            form.elements["widgettrasl_citta"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_citta"].style.borderColor = "";
        }

        if (citta_to == "") {
            form.elements["widgettrasl_citta_to"].focus();
            form.elements["widgettrasl_citta_to"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_citta_to"].style.borderColor = "";
        }

        if (dal == "") {
            form.elements["widgettrasl_dal"].focus();
            form.elements["widgettrasl_dal"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_dal"].style.borderColor = "";
        }

        if (al == "") {
            form.elements["widgettrasl_al"].focus();
            form.elements["widgettrasl_al"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_al"].style.borderColor = "";
        }

        if (nomeazienda == "") {
            form.elements["widgettrasl_nome_azienda"].focus();
            form.elements["widgettrasl_nome_azienda"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_nome_azienda"].style.borderColor = "";
        }

        if (email == "") {
            form.elements["widgettrasl_email"].focus();
            form.elements["widgettrasl_email"].style.borderColor = "red";
            oksubmit = false;
        }
        else {
            form.elements["widgettrasl_email"].style.borderColor = "";
        }


        if (particolarita.toLowerCase().indexOf("http:") !== -1) {
            alert(msg_testo_indirizzi);
            form.elements["widgettrasl_particolarita"].focus();
            oksubmit = false;
        }

        if (!oksubmit) return false;

        if (!isEmail(email)) {
            alert(msg_email_valido);
            form.elements["widgettrasl_email"].focus();
            form.elements["widgettrasl_email"].style.borderColor = "red";
            return false;
        }

        if (!infor) {
            alert(msg_accetta_informativa);
            form.elements["widgettrasl_informativa"].focus();
            return false;
        }
        if (nobot != "") {
            alert(msg_codice_controllo);
            return false;
        }
        //if (!whenUserClickOnTheSubmitForum(true)) {
        //    alert(msg_codice_controllo);
        //    return false;
        //}

        form.action = document.forms["formBoxTraslocoUfficio"]["actionTo"].value;
        form.submit();
    }
    catch (e) {
        alert(e);
        return false;
    }
}