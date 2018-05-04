// Agradeço a DEUS pelo dom do conhecimento

$(document).ready(function() {
    $('#cursos_complementares').DataTable({
        "language": {
            "url": "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        }
    });
});

var $doc = $('html, body');
$('.scrollSuave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 3000);
    return false;
});

let year = new Date().getFullYear();
let updateAge = $('#idade').text('Brasileiro. Solteiro, ' + (year - 1993) +' anos');