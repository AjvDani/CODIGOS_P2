
var btn_mostrar=document.getElementById('btn_mostrar_numeros');
var txt_mostrar_resultado=document.getElementById('txt_mostrar_resultado');
var txt_mostrar_pares=document.getElementById('txt_mostrar_pares');
var txt_mostrar_impares=document.getElementById('txt_mostrar_impares');



btn_mostrar.addEventListener('click',function(event){
    var txt_numero_inicio=parseInt(document.getElementById('txt_numero_inicio').value);
    var txt_numero_final=parseInt(document.getElementById('txt_numero_final').value);

    

    let numeros="";
    let tabla="";
    let tabla2="";

    if(txt_numero_inicio<txt_numero_final){
        //Impresion tabla resultado
        let numeros="";
        for (let index = txt_numero_inicio; index <= txt_numero_final; index++) {
            //numeros+=index+"<br>";
            numeros+=`Numero ${index} impreso <br>`;
            //console.log(index);
        }
        txt_mostrar_resultado.innerHTML=numeros;


        //Impresion Pares E Impares
        for (let index = txt_numero_inicio; index <= txt_numero_final; index++) {
        //numeros+=index+"<br>";
        //numeros+=`Numero ${index} impreso <br>`;
            if(index%2==0){
                tabla+=`Numero ${index} par <br>`;
            }else{
                tabla2+=`Numero ${index} impar <br>`;
            }
            //console.log(index);
        }
        txt_mostrar_pares.innerHTML=tabla;
        txt_mostrar_impares.innerHTML=tabla2;

    }else{
        txt_mostrar_resultado.innerHTML="Numero De Inicio Mayor Que Numero Final";

        txt_mostrar_pares.innerHTML = "";
        txt_mostrar_impares.innerHTML = "";
    }



})

var btn_limpiar=document.getElementById('btn_limpiar');
btn_limpiar.addEventListener('click',function(){
    var txt_numero_inicio=document.getElementById('txt_numero_inicio');
    var txt_numero_final=document.getElementById('txt_numero_final');



    txt_numero_inicio.value="";
    txt_numero_final.value="";

    // Si se asigna con .innerHTML, se debe vaciar con .innerHTML
    txt_mostrar_resultado.innerHTML = "";
    txt_mostrar_pares.innerHTML = "";
    txt_mostrar_impares.innerHTML = "";

    
})

