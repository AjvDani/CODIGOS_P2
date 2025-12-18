var btn_restar=document.getElementById('btn_restar');

btn_restar.addEventListener('click',function(event){
    let n1=document.getElementById('txt_numero_uno_r').value;
    let n2=document.getElementById('txt_numero_dos_r').value;
    let resultado_resta=document.getElementById('txt_resultado_restar');

    resultado_resta.innerHTML=parseFloat(n1)-parseFloat(n2);
});