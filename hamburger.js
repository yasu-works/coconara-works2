$(function(){
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    // ハンバーガーメニューのクリックイベント
    $('#toggle_btn').on('click', function() {
        if ($('#menu').hasClass('add-menu-sp')) {
        $('#menu').removeClass('add-menu-sp');
        $('#modal').removeClass('add-modal-sp');
        $('#toggle_btn').removeClass('active-close-btn');

        } else {
        $('#menu').addClass('add-menu-sp');
        $('#modal').addClass('add-modal-sp');
        $('#toggle_btn').addClass('active-close-btn');
        }
    });

    $('#modal').on('click', function() {
        $('#modal').removeClass('add-modal-sp');
        $('#menu').removeClass('add-menu-sp');
    });
});

