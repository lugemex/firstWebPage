var $button=$('button'); //llamada por Etiqueta
var $articles=$('#articles'); //llamada por ID
$button.addClass('button'); //a todos los botones se les asigna la clase button de CSS

$button.on('click',function(e){
    $(this).addClass('btnActive').siblings().removeClass('btnActive');
    var $selectedBtn='#'+e.target.id;
    console.log($selectedBtn);
    // $articles.siblings($selectedBtn).hide();
    $articles.children($selectedBtn).show(1000).siblings().hide(1000);
    
});

$articles.children().hide();
