var btn_mostrar_tabla=document.getElementById('btn_mostrar_tabla');
var txt_mostrar_resultado_tabla=document.getElementById('txt_mostrar_resultado_tabla');

btn_mostrar_tabla.addEventListener('click',function(){
    var txt_numero_tabla=parseInt(document.getElementById('txt_numero_tabla').value);

    
    if(txt_numero_tabla){
            let tabla2="";
            for (let i = 1; i <= 12; i++) {
            //let tabla1=txt_numero_tabla+"x"+i+"= "+(txt_numero_tabla*i);
            //console.log(tabla1);
            tabla2+=`${txt_numero_tabla} x ${i} = ${txt_numero_tabla*i} <br>`;
            console.log(tabla2);
            }
        txt_mostrar_resultado_tabla.innerHTML=tabla2;
    }else{
        txt_mostrar_resultado_tabla.textContent="Ingrese un numero valido";
    }

})


var btn_limpiar=document.getElementById('btn_limpiar');
btn_limpiar.addEventListener('click',function(){
    var elemento=document.getElementById('txt_numero_tabla').value;
    elemento="";
})