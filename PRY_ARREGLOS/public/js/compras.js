var btn_agregar=document.getElementById('btn_agregar');

var ul_lista_productos=document.getElementById('lista_productos');
var lista_productos=[];

var ul_lista_productos_m=document.getElementById('lista_productos_m');
var lista_productos_m=[];


btn_agregar.addEventListener('click',function(event){
    var nombre_producto=document.getElementById('txt_producto');



    if(nombre_producto.value!=''){
        lista_productos.unshift(nombre_producto.value);
        ul_lista_productos.innerHTML='';

        
        lista_productos_m.unshift(nombre_producto.value);
        ul_lista_productos_m.innerHTML='';
        
        lista_productos_m.map(function(producto){
            let li_item =document.createElement('li');
            li_item.classList.add('list-group-item');
            li_item.textContent=producto.toUpperCase();

            
            ul_lista_productos_m.appendChild(li_item);
            
        });
        
        lista_productos.map(function(producto){
            let li_item =document.createElement('li');
            li_item.classList.add('list-group-item');
            li_item.textContent=producto;
            
            ul_lista_productos.appendChild(li_item);
            
        });

        nombre_producto.value='';




    }else{
        console.log('POR FAVOR INGRESE EL NOMBRE DEL PRODUCTO!!');
    }
});

