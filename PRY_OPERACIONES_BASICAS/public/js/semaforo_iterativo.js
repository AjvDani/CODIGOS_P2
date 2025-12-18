var semaforos = document.querySelectorAll('input[name="luz"]');
var txt_resultado = document.getElementById('txt_resultado');

/*
for(let i=1;i<=semaforos.length;i++){
    console.log(i);
}
    */


var semaforos_ok = document.querySelector('input[name="luz"]:checked');
if(semaforos_ok){
    sw(semaforos_ok.id);
}







semaforos.forEach(elemento => {



    elemento.addEventListener('click', function (e) {
        /*
        if(e.target.id=="radio_rojo"){
            txt_resultado.textContent="DETENGASE";
        } else if(e.target.id=="radio_verde"){
            txt_resultado.textContent="AVANCE";
        } else if(e.target.id=="radio_amarillo"){
            txt_resultado.textContent="CUIDADO";
        }
            */
        

        switch (e.target.id) {
            case "radio_rojo":
                txt_resultado.textContent = "DETENGASE";
                break;
            case "radio_amarillo":
                txt_resultado.textContent = "CUIDADO";
                break;
            case "radio_verde":
                txt_resultado.textContent = "AVANCE";
                break;
            default: txt_resultado.textContent = "SELECCIONE LA OPCION";
        }




    })
})

function sw(id) {
    switch(id){
        case "radio_rojo":
        txt_resultado.textContent = "DETENGASE";
        break;
        case "radio_amarillo":
        txt_resultado.textContent = "CUIDADO";
        break;
        case "radio_verde":
        txt_resultado.textContent = "AVANCE";
        break;
        default : txt_resultado.textContent = "SELECCIONE LA OPCION";
    }


}
