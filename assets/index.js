$(document).ready(function(){console.log(window.top);
    if (data != undefined && data.length){
        var table = $('<table />').appendTo('.body');
        for(var n = 0; n < data.length; n++){
            var battle = data[n];
            $('<tr />').attr('id', battle['id'])
            .append(
                $('<td />').html(battle.name)
            ).append(
                $('<td />').html(battle.date)
            ).append(
                $('<td />').html(battle.rate)
            ).append(
                $('<td />').html(
                    $('<div />').addClass(battle.win ? 'victory' : 'defeat')
                )
            ).appendTo(table)
            .click(function(e){
                open($(this).attr('id'));
            });
        }
    }

    $('.back').click(function(){
        close();
    });

});

function open(id){
    var battle  = maps[id];
    if (battle !== undefined) {
        $('.battlelist').addClass('hidden');
        $('.battleGrid').remove();
        var battleGrid = $('<div />').addClass('battleGrid').appendTo('.battlefield');
        for (var n = 0; n < battle.length; n++){
            var ceil = battle[n];

            var div = $('<div />').addClass('ceil')
                .addClass(ceil.ceil);
            if (ceil.question != undefined && ceil.question == true){
                div.addClass('questionMark');
            } else {
                div.addClass('castle' + ceil.castle)
                    .append(
                        $('<div />').addClass('level').html(ceil.level)
                    )
                    .append(
                        $('<div />').addClass('castle').html(ceil.castle)
                    )
                    .append(
                        $('<div />').addClass('name').html(ceil.name)
                    );
                if (ceil.img != undefined && ceil.img != null) {
                    div.click(function (e) {
                        displayImg($(this).attr('data-img'))
                    })
                        .attr('data-img', ceil.img)
                        .addClass('clickable');
                }
            }
            div.appendTo(battleGrid);
        }

        $('.back').css('display', 'block');
    }
}

function close(){
    $('.battleGrid').remove();
    $('.back').css('display', 'none');
    $('.battlelist').removeClass('hidden');
}

function displayImg(img){appendSpinner();return;
    var el = $('<img />').attr({
        'src': img,
        'class': 'screenshot'
    }).click(function(){
        $(this).remove()
    })
    .appendTo('body').load(function() {
        var win = $(window);
        if (win.width() < el.width() || win.height() < el.height()) {
            if (el.width() / win.width() > el.height() / win.height()) {
                el.css({
                    'width': '100%',
                    'left': 0,
                    'top': 0
                });
            } else {
                el.css({
                    'height': '100%',
                    'top': 0,
                    'left': 0
                });
            }
        } else {
            var top = parseInt((win.height() - el.height()) / 2);
            var left = parseInt((win.width() - el.width()) / 2);
            el.css({
                'top': top,
                'left': left
            })
        }
    });
}

function appendSpinner(){
    $('<div />').addClass('blackVeil').append(
        $('<div />').addClass('outerSpinner').append(
            $('<div />').addClass('innerSpinner')
        ).css
    ).appendTo('body');
}
