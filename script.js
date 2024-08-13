$(document).ready(function() {
    // Проверка работы jQuery
    console.log('jQuery is working!');

    // Интерактивность для объектов второй витрины
    $('#vitrina2 .interactive').on('click', function() {
        $(this).toggleClass('selected');
        $(this).css('background-color', $(this).hasClass('selected') ? '#ffa' : '#d0ffd0');
    });

    // Добавление собственных объектов
    $('#addObjectForm').on('submit', function(event) {
        event.preventDefault();
        var objectText = $('#objectText').val();
        if(objectText) {
            $('#customObjects').append('<div class="object">' + objectText + '</div>');
            $('#objectText').val('');
        }
    });
});