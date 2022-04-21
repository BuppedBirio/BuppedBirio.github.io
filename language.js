$('[lang]').hide();
$('[lang="en"]').show();

$('#lang-switch').change(function () {
    var lang = $(this).val();
    switch (lang) {
    case 'en':
        $('[lang]').hide();
        $('[lang="en"]').show();
    break;
    case 'it':
        $('[lang]').hide();
        $('[lang="it"]').show();
    break;
    default:
        $('[lang]').hide();
        $('[lang="en"]').show();
    }
});