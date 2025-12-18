var btn_convertir_km_m=document.getElementById('btn_convertir_km_m');

btn_convertir_km_m.addEventListener('click',function(event){
    let n1=document.getElementById('txt_numero_uno').value;
    let resultado=document.getElementById('txt_resultado');

    resultado.innerHTML=parseFloat(n1)*1000;
});