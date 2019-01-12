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
            if (ceil.trap != undefined && ceil.trap == true){
                div.addClass('trap');
            } else if (ceil.question != undefined && ceil.question == true){
                div.addClass('questionMark');
            } else {
                div.addClass('castle castle' + ceil.castle)
                    .append(
                        $('<div />').addClass('level').html(ceil.level)
                    )
                    .append(
                        $('<div />').addClass('castleLevel').html(ceil.castle)
                    )
                    .append(
                        $('<div />').addClass('name').html(ceil.name)
                    );

                if (ceil.owner != undefined && ceil.owner == true){
                    div.append(
                        $('<div />').addClass('crown')
                    );
                }

                if (ceil.id != undefined){
                    var url = 'https://vk.com/id' + ceil.id;
                    div.append(
                        $('<a href="' + url + '" class="user" target="_top" />').text('i').click(function(e){
                            e.stopPropagation();
                        })
                    );
                }

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

        var battleInfo = data.find(function(battle){
            return battle['id']==id;
        });

        buildShield(battleInfo);
        addBatteleDate(battleInfo);

        $('.back').css('display', 'block');
    }
}

function close(){
    $('.battleGrid').remove();
    $('.back').css('display', 'none');
    $('.battlelist').removeClass('hidden');
}

function hideImg(){
    $('.blackVeil').remove();
    $('.enlarge').remove();
    $('.screenshot').remove()
}

function displayImg(img){
    appendSpinner();
    $('<img />').attr({
        'src': img,
        'class': 'screenshot'
    }).click(function(){
        hideImg();
    })
    .appendTo('.main')
    .load(function() {
        if (!$('.blackVeil').length){
            return;
        }
        $('.outerSpinner').remove();

        var win = $('.main');
        var el = $(this);
        var width = el.width();
        var height = el.height();
        if (win.width() < width || win.height() < height) {
            if (width / win.width() > height / win.height()) {
                height = parseInt((win.width()/width)*el.height());
                width = win.width();
            } else {
                width = parseInt((win.height()/height)*el.width());
                height = win.height();
            }
        }
        var top = parseInt((win.height() - height)/2);
        var left = parseInt((win.width() - width)/2);

        el.css({
            'width': width,
            'height': height,
            'left': left,
            'top': top
        });

        $('<a href="' + img + '" target="_blank" class="enlarge" />').appendTo('.main').css({
            top: top + height - 92,
            left: left + width - 92
        });
    });
}

function buildShield(battleInfo) {
    var results = battleInfo.rate.split('/');
    var width = parseInt(parseInt(results[1])/30*100);
    var width2 = parseInt(parseInt(results[0])/30*100);
    $('<div class="clanContainer" />').append(
        $('<div class="clanName">' + battleInfo.name +'</div>')
    ).append(
        $('<div class="starContainer"><div class="blueContainer" style="width:' + width + '%"></div><div class="starsNumbers">'+results[1]+'</div></div>')
    ).appendTo('.battleGrid');

    $('<div class="ourContainer" />').append(
        $('<div class="clanName">Роза и Меч</div>')
    ).append(
        $('<div class="starContainer"><div class="blueContainer" style="width:' + width2 + '%"></div><div class="starsNumbers">'+results[0]+'</div></div>')
    ).append(
        $('<div class="vs" />')
    ).appendTo('.battleGrid');
}

function addBatteleDate(battleInfo){
    $('<div class="battleDate">' + battleInfo.date + '</div>').appendTo('.battleGrid');
}

function appendSpinner(){
    var margin = parseInt(($('.main').height() - 50)/2);
    $('<div />').addClass('blackVeil').append(
        $('<div />').addClass('outerSpinner').append(
            $('<div />').addClass('innerSpinner')
        ).css('margin-top', margin)
    ).click(function(){
        hideImg();
    })
    .appendTo('.main');
}
