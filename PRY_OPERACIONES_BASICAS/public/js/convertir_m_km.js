var btn_convertir_m_km=document.getElementById('btn_convertir_m_km');

btn_convertir_m_km.addEventListener('click',function(event){
    let n1=document.getElementById('txt_numero_dos').value;
    let resultado_1=document.getElementById('txt_resultado1');

    resultado_1.innerHTML=parseFloat(n1)/1000;
});