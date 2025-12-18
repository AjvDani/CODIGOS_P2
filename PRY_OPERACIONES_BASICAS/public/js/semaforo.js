var radio_rojo=document.getElementById('radio_rojo');
var radio_amarillo=document.getElementById('radio_amarillo');
var radio_verde=document.getElementById('radio_verde');
var txt_resultado=document.getElementById('txt_resultado');

radio_rojo.addEventListener('mouseover',function(event){
    txt_resultado.textContent="DETENGASEEEE";
    //console.log('Se ha clickeado en color rojo');
});
radio_amarillo.addEventListener('mouseover',function(event){
    //console.log('Se ha clickeado en color amarillo');
    txt_resultado.textContent="CUIDADO";
});
radio_verde.addEventListener('mouseover',function(event){
    //console.log('Se ha clickeado en color verde');
    txt_resultado.textContent="AVANCE";
});