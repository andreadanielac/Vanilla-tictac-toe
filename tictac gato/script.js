let turno = false;
let victoria = false;
let contador = 0;

const hacerClick = (event) => {
    const { id } = event.target;
    const div = document.getElementById(id);

    if (div.innerText === "" && victoria === false) {
        div.innerText = turno ? "O" : "X";
        verificarVictoria();
        
        if (turno === false){
            const jugador1 = document.getElementById('jugador1');
            jugador1.style.border = '5px';
            jugador1.style.borderstyle = 'doble';
            jugador1.style.borderRadius = '50%';
            jugador1.style.backgroundColor = 'green';

            const jugador2 = document.getElementById('jugador2');
            jugador2.style.border = '0px';
            jugador2.style.borderstyle = 'none';
            jugador2.style.borderRadius = '0%';
            jugador2.style.backgroundColor = 'pink';
            

        }else{
            
            jugador2.style.border = '5px';
            jugador2.style.borderstyle = 'doble';
            jugador2.style.borderRadius = '50%';
            jugador2.style.backgroundColor = 'green';

            jugador1.style.border = '0px';
            jugador1.style.borderstyle = 'none';
            jugador1.style.borderRadius = '0%'
            jugador1.style.backgroundColor = 'rgb(236, 157, 83)'
        }
        turno = !turno;
    }
};

const verificarVictoria = () => {
    contador++;
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    const forma1 = div1.innerText === div2.innerText && 
    div1.innerText === div3.innerText && div1.innerText !== "";

    const forma2 = div4.innerText === div5.innerText && 
    div4.innerText === div6.innerText && div4.innerText !== "";

    const forma3 = div7.innerText === div8.innerText && 
    div7.innerText === div9.innerText && div7.innerText !== "";

    const forma4 = div1.innerText === div4.innerText && 
    div1.innerText === div7.innerText && div1.innerText !== "";

    const forma5 = div2.innerText === div5.innerText && 
    div2.innerText === div8.innerText && div2.innerText !== "";

    const forma6 = div3.innerText === div6.innerText && 
    div3.innerText === div9.innerText && div3.innerText !== "";

    const forma7 = div1.innerText === div5.innerText && 
    div1.innerText === div9.innerText && div1.innerText !== "";

    const forma8 = div3.innerText === div5.innerText && 
    div3.innerText === div7.innerText && div3.innerText !== "";

if (forma1){
    const linea = document.getElementById('linea');
    linea.style.height = '10px';
    linea.style.width = '500px';
    linea.style.top = '75px';
    linea.style.left = '0px'

    victoria = true;
    window.alert(`¡FELICIDADES! VICTORIA PARA ${turno ? "JUGADOR 2" : "JUGADOR 1"}`);
}else if (forma2){
    const linea = document.getElementById('linea');
    linea.style.height = '10px';
    linea.style.width = '500px';
    linea.style.top = '240px';
    linea.style.left = '0px'

    victoria = true;
    alert (`¡FELICIDADES! VICTORIA PARA ${turno ? "JUGADOR 2" : "JUGADOR 1"}`);
} else if (forma3){
    const linea = document.getElementById('linea');
    linea.style.height = '10px';
    linea.style.width = '500px';
    linea.style.top = '410px';
    linea.style.left = '0px'
    victoria = true;
    
    alert(`¡FELICIDADES! VICTORIA PARA ${turno ? "JUGADOR 2" : "JUGADOR 1"}`);
} else if (forma4){
    const linea = document.getElementById('linea');
    linea.style.height = '500px';
    linea.style.width = '10px';
    linea.style.top = '0px';
    linea.style.left = '75px'
    victoria = true;
    
    alert(`¡FELICIDADES! VICTORIA PARA ${turno ? "JUGADOR 2" : "JUGADOR 1"}`);
}else if (forma5){
    const linea = document.getElementById('linea');
    linea.style.height = '500px';
    linea.style.width = '10px';
    linea.style.top = '0px';
    linea.style.left = '245px'
    victoria = true;
    
    alert(`¡FELICIDADES! VICTORIA PARA ${turno ? "JUGADOR 2" : "JUGADOR 1"}`);
} else if (forma6){
    const linea = document.getElementById('linea');
    linea.style.height = '500px';
    linea.style.width = '10px';
    linea.style.top = '0px';
    linea.style.left = '415px'
    victoria = true;
    
    alert(`¡FELICIDADES! VICTORIA PARA ${turno ? "JUGADOR 2" : "JUGADOR 1"}`);
}else if (forma7) {
    const linea = document.getElementById('linea');
    linea.style.height = '10px';
    linea.style.width = '600px';
    linea.style.top = '240px';
    linea.style.left = '-50px'
    linea.style.transform = 'rotate(45deg)';

    victoria = true;
    
    alert(`¡FELICIDADES! VICTORIA PARA ${turno ? "JUGADOR 2" : "JUGADOR 1"}`);
}else if (forma8){
    const linea = document.getElementById('linea');
    linea.style.height = '10px';
    linea.style.width = '600px';
    linea.style.top = '240px';
    linea.style.left = '-50px'
    linea.style.transform = 'rotate(135deg)';

    victoria = true;
    
    alert(`¡FELICIDADES! VICTORIA PARA ${turno ? "JUGADOR 2" : "JUGADOR 1"}`);
}else {
    if (contador === 9) {

        alert("Bien hecho jugadores, es un EMPATE");
    }
}
};


const reload = () => {
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    const linea = document.getElementById('linea');
    linea.style.height = '0px';
    linea.style.width = '0px';
    linea.style.top = '0px';
    linea.style.left = '0px'

    const jugador1 = document.getElementById('jugador1');
    jugador1.style.border = '0px';
    jugador1.style.borderstyle = 'none';
    jugador1.style.borderRadius = '0%'
    jugador1.style.backgroundColor = 'rgb(236, 157, 83)'

    const jugador2 = document.getElementById('jugador2');
    jugador2.style.border = '0px';
    jugador2.style.borderstyle = 'none';
    jugador2.style.borderRadius = '0%';
    jugador2.style.backgroundColor = 'pink';


    div1.innerText = "";
    div2.innerText = "";
    div3.innerText = "";
    div4.innerText = "";
    div5.innerText = "";
    div6.innerText = "";
    div7.innerText = "";
    div8.innerText = "";
    div9.innerText = "";

    turno = false;
    victoria = false;
    contador = 0;

};