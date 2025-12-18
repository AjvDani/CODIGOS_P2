var btn_dividir=document.getElementById('btn_dividir');

btn_dividir.addEventListener('click',function(event){
    let n1=document.getElementById('txt_numero_uno_d').value;
    let n2=document.getElementById('txt_numero_dos_d').value;
    let resultado_div=document.getElementById('txt_resultado_div');

    resultado_div.innerHTML=parseFloat(n1)/parseFloat(n2);
});
