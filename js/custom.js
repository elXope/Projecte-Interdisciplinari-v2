$(document).ready(function() {

    // Contingut noms dies
    (function() {
        $(window).resize(function() {
            let diesMin = ['Dll', 'Dt', 'Dm', 'Dj', 'Dv', 'Ds', 'Dg'];
            let diesMax = ['Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte', 'Diumenge'];
            console.log($('.calendari').width());
            if ($('.calendari').width() < 920) {
                let cont = 0;
                $('.calendari__nomDia').each(function() {
                    $(this).text(diesMin[cont]);
                    cont++;
                });
            } else {
                let cont = 0;
                $('.calendari__nomDia').each(function() {
                    $(this).text(diesMax[cont]);
                    cont++;
                });
            }
        });
    })();

    // Llibreta tatxar
    (function() {
        $('.form-check-input').change(function() {
            if($(this).prop('checked')) {
                $(this).parent().addClass('text-muted');
                $(this).siblings().addClass('text-decoration-line-through');
                $('.llibreta').append($(this).parent());
            } else {
                $(this).parent().removeClass('text-muted');
                $(this).siblings().removeClass('text-decoration-line-through');
                $(this).parent().insertBefore($('.form-check-input').parent('.text-muted')[0]);
            }
        });
    })();

});