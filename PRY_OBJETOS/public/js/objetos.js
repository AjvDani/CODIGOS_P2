// declarar un object

var persona={
    cedula: "1729000933",
    nombres: "JOSE DANIEL",
    apellidos: "VILLA ANDRANGO",
    edad: 19,
    estatura: 1.72,
    es_ecuatoriano: true,
    mis_asignaturas:[
        'PROGRAMACION WEB',
        'APLICACIONES WEB',
        'ARQUITECTURA'],

    fn_saludar: function(){
        return "HOLA MI NOMBRE ES "+this.nombres+" "+this.apellidos;
    },



    fn_calcularEdad: function(){
        return this.edad>=18 ? 'SOY MAYOR DE EDAD': 'SOY MENOR DE EDAD';
    }

    
};
/*
console.log(persona.mi_asignatura[1]);
persona.fn_saludar();
console.log(persona.fn_saludar());

console.log(persona.fn_calcularEdad());
*/

var header_info=document.getElementById('header_info');
header_info.innerHTML= ` ${persona.fn_saludar()}`;
//persona.fn_saludar();

var mis_asignaturas=document.getElementById('mis_asignaturas');

persona.mis_asignaturas.forEach(element => {
    let li=document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent=element;
    mis_asignaturas.appendChild(li);
    
});

var soy_mayor_edad=document.getElementById('soy_mayor_edad');
soy_mayor_edad.innerHTML=persona.fn_calcularEdad();


