function setLanguage(lang) {
    switch (lang) {
    case 'en':
        $('[lang]').hide();
        $('[lang="en"]').show();
        
        localStorage.setItem("language", "en");
        document.getElementById("lang-switch").options[0].selected = true;
    break;
    case 'it':
        $('[lang]').hide();
        $('[lang="it"]').show();

        localStorage.setItem("language", "it");
        document.getElementById("lang-switch").options[1].selected = true;
    break;
    default:
        $('[lang]').hide();
        $('[lang="en"]').show();

        localStorage.setItem("language", "en");
        document.getElementById("lang-switch").options[0].selected = true;
    }
}

setLanguage(localStorage.getItem("language"));

$('#lang-switch').change(function () {
    setLanguage($(this).val());
});