var btn_multiplicar=document.getElementById('btn_multiplicar');

btn_multiplicar.addEventListener('click',function(event){
    let n1=document.getElementById('txt_numero_uno_m').value;
    let n2=document.getElementById('txt_numero_dos_m').value;
    let resultado_multi=document.getElementById('txt_resultado_multi');

    resultado_multi.innerHTML=parseFloat(n1)*parseFloat(n2);
});