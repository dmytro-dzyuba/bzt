$(document).ready(function(){
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
});

function open(id){
    var battle  = maps[id];
    if (battle !== undefined) {
        $('.battlelist').addClass('hidden');
        $('.battleGrid').remove();
        var battleGrid = $('<div />').addClass('battleGrid').appendTo('.battlefield');
        for (var n = 0; n < battle.length; n++){
            var ceil = battle[n];
            $('<div />').addClass('ceil')
                .addClass(ceil.ceil)
                .addClass('castle'+ ceil.castle)
                .append(
                    $('<div />').addClass('level').html(ceil.level)
                )
                .append(
                    $('<div />').addClass('castle').html(ceil.castle)
                )
                .append(
                    $('<div />').addClass('name').html(ceil.name)
                )
                .appendTo(battleGrid);
        }
    }
}