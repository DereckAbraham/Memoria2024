//descubrir carta
let todas_las_cartad = document.querySelectorAll(".carta_trasera");
    todas_las_cartad.forEach((cada_div)=>{
        cada_div.addEventListener("click",()=>{
           


            
    // cantidad de cartas desvubiertas

            //estas son las variables a utilizar 
            let cantidad_descubiertas = document.querySelectorAll(".activar")
            total_descubiertas = cantidad_descubiertas.length;
            
                //Para contar el numero de cartas que queremos voltear
            if(total_descubiertas <2){
                cada_div.classList.add("activar")
                cantidad_descubiertas = document.querySelectorAll(".activar")

                //Para darle vuelta a las cartas cuando ya se haigan seleccionado las cartas que hemos querido volter
                if(total_descubiertas==1){

                    // es el tiempo en el que se tarda en dar la vuelta 
                    setTimeout(()=>{
                        //es lo que quiero que pase cuando pase el tiempo que se dio
                        cantidad_descubiertas.forEach((cada_carta_descubierta)=>{
                            cada_carta_descubierta.classList.remove("activar")
        
                        });
                    },(1000))
                }

            }

        });
    });