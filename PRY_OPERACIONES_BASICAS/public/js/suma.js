var btn_sumar=document.getElementById('btn_sumar');

btn_sumar.addEventListener('click',function(event){
    let n1=document.getElementById('txt_numero_uno_s').value;
    let n2=document.getElementById('txt_numero_dos_s').value;
    let resultado=document.getElementById('txt_resultado');

    resultado.innerHTML=parseFloat(n1)+parseFloat(n2);
});