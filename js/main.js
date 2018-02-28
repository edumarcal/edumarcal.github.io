// Agradeço a DEUS pelo dom do conhecimento

var $doc = $('html, body');
$('.scrollSuave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 3000);
    return false;
});