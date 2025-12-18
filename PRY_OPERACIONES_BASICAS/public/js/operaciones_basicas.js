
var btn_sumar=document.getElementById('btn_sumar');

btn_sumar.addEventListener('click',function(event){
    let n1=document.getElementById('txt_numero_uno').value;
    let n2=document.getElementById('txt_numero_dos').value;
    let resultado=document.getElementById('txt_resultado');

    resultado.innerHTML=parseFloat(n1)+parseFloat(n2);
});


var btn_restar=document.getElementById('btn_restar');

btn_restar.addEventListener('click',function(event){
    let n1=document.getElementById('txt_numero_uno').value;
    let n2=document.getElementById('txt_numero_dos').value;
    let resultado_resta=document.getElementById('txt_resultado_restar');

    resultado_resta.innerHTML=parseFloat(n1)-parseFloat(n2);
});

var btn_multiplicar=document.getElementById('btn_multiplicar');

btn_multiplicar.addEventListener('click',function(event){
    let n1=document.getElementById('txt_numero_uno').value;
    let n2=document.getElementById('txt_numero_dos').value;
    let resultado_multi=document.getElementById('txt_resultado_multi');

    resultado_multi.innerHTML=parseFloat(n1)*parseFloat(n2);
});


var btn_dividir=document.getElementById('btn_dividir');

btn_dividir.addEventListener('click',function(event){
    let n1=document.getElementById('txt_numero_uno').value;
    let n2=document.getElementById('txt_numero_dos').value;
    let resultado_div=document.getElementById('txt_resultado_div');

    resultado_div.innerHTML=parseFloat(n1)/parseFloat(n2);
});



