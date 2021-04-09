var scene; //mundo virtual
var camera; //area de visualização
var renderer; //responsavel por renderizar tudo

var elementos = [];

var velocidade = 0.07;

var criaSisSolar = function () {

    let red = new THREE.Color(1, 0, 0);
    let green = new THREE.Color(0, 1, 0);
    let blue = new THREE.Color(0, 0, 1);
    let cores = [red, green, blue];

    let materials = [
        new THREE.MeshBasicMaterial({ color: red }),
        new THREE.MeshBasicMaterial({ color: green }),
        new THREE.MeshBasicMaterial({ color: blue }),
        new THREE.MeshBasicMaterial({ color: red }),
        new THREE.MeshBasicMaterial({ color: green }),
        new THREE.MeshBasicMaterial({ color: blue })
    ];

    let sol = new THREE.Mesh(new THREE.SphereGeometry(8, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffff00 }));
    sol.position.x = -10;
    elementos["sol"] = sol;

    let pivot = new THREE.Group();
    sol.add(pivot);
    pivot.position.x = sol.position.x + 8; //posicao do sol

    elementos["pivot"] = pivot;

    let terra = new THREE.Mesh(new THREE.SphereGeometry(1.5, 6, 6), new THREE.MeshBasicMaterial({ color: blue }));
    pivot.add(terra);
    terra.position.x += pivot.position.x + 26;
    elementos["terra"] = terra;

    let marte = new THREE.Mesh(new THREE.SphereGeometry(2, 6, 6), new THREE.MeshBasicMaterial({ color: red }));
    pivot.add(marte);
    marte.position.x += pivot.position.x + 20;


    // let cubo2 = new THREE.Mesh(new THREE.BoxGeometry(10, 3, 3), materials);
    // cubo2.position.x= 7;
    // elementos["cubo2"] = cubo2;	


    scene.add(sol);
    //scene.add(pivot);

};

var criaMonstro = function () {
    let puppet = [];

    let red = new THREE.Color(1, 0, 0);
    let green = new THREE.Color(0, 1, 0);
    let blue = new THREE.Color(0, 0, 1);
    let cores = [red, green, blue];
    let materials = [
        new THREE.MeshBasicMaterial({ color: blue }),
        new THREE.MeshBasicMaterial({ color: blue }),
        new THREE.MeshBasicMaterial({ color: blue }),
        new THREE.MeshBasicMaterial({ color: blue }),
        new THREE.MeshBasicMaterial({ color: green }),
        new THREE.MeshBasicMaterial({ color: blue })
    ];

    let tronco = new THREE.Mesh(new THREE.BoxGeometry(4, 7, 2), materials);
    puppet["tronco"] = tronco;

    let cabeca = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), new THREE.MeshBasicMaterial({ color: blue }));
    puppet["cabeca"] = cabeca;
    tronco.add(cabeca);
    cabeca.position.y = tronco.position.y + 6;

    //bracoDireito

    let ombroD = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    puppet["ombroD"] = ombroD;
    tronco.add(ombroD);
    ombroD.position.y = tronco.position.y + 3;
    ombroD.position.x = tronco.position.y + 3;

    let pivotOmbroD = new THREE.Group();
    puppet["pivotOmbroD"] = pivotOmbroD;
    ombroD.add(pivotOmbroD);

    let bracoD = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({ color: red }));
    puppet["bracoD"] = bracoD;
    pivotOmbroD.add(bracoD)
    bracoD.position.y -= 2;

    let cotoveloD = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    puppet["cotoveloD"] = cotoveloD;
    bracoD.add(cotoveloD);
    cotoveloD.position.y = cotoveloD.position.y - 2.1;

    let pivotCotoveloD = new THREE.Group();
    puppet["pivotCotoveloD"] = pivotCotoveloD;
    cotoveloD.add(pivotCotoveloD);

    let radioD = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({ color: red }));
    puppet["radioD"] = radioD;
    pivotCotoveloD.add(radioD)
    radioD.position.y -= 2;

    //bracoEsquerdo

    let ombroE = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    puppet["ombroE"] = ombroE;
    tronco.add(ombroE);
    ombroE.position.y = tronco.position.y + 3;
    ombroE.position.x = tronco.position.y - 3;

    let pivotOmbroE = new THREE.Group();
    puppet["pivotOmbroE"] = pivotOmbroE;
    ombroE.add(pivotOmbroE);

    let bracoE = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({ color: red }));
    puppet["bracoE"] = bracoE;
    pivotOmbroE.add(bracoE)
    bracoE.position.y += 2;

    let cotoveloE = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    puppet["cotoveloE"] = cotoveloE;
    bracoE.add(cotoveloE);
    cotoveloE.position.y = cotoveloE.position.y + 2.1;

    let pivotCotoveloE = new THREE.Group();
    puppet["pivotCotoveloE"] = pivotCotoveloE;
    cotoveloE.add(pivotCotoveloE);

    let radioE = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({ color: red }));
    puppet["radioE"] = radioE;
    pivotCotoveloE.add(radioE)
    radioE.position.y += 2;


    //pernaDireita
    let pivotPernaD = new THREE.Group();
    puppet["pivotPernaD"] = pivotPernaD;
    tronco.add(pivotPernaD);

    let pernaD = new THREE.Mesh(new THREE.BoxGeometry(1, 4, 1), new THREE.MeshBasicMaterial({ color: red }));
    puppet["pernaD"] = pernaD;
    pivotPernaD.add(pernaD)
    pernaD.position.y -= 5.6;
    pernaD.position.x += 1.4;

    let joelhoD = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    puppet["joelhoD"] = joelhoD;
    pernaD.add(joelhoD);
    joelhoD.position.y = joelhoD.position.y - 2.1;

    let pivotJoelhoD = new THREE.Group();
    puppet["pivotJoelhoD"] = pivotJoelhoD;
    joelhoD.add(pivotJoelhoD);

    let canelaD = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), new THREE.MeshBasicMaterial({ color: red }));
    puppet["canelaD"] = canelaD;
    pivotJoelhoD.add(canelaD)
    canelaD.position.y -= 2;



    //pernaEsquerda
    let pivotPernaE = new THREE.Group();
    puppet["pivotPernaE"] = pivotPernaE;
    tronco.add(pivotPernaE);

    let pernaE = new THREE.Mesh(new THREE.BoxGeometry(1, 4, 1), new THREE.MeshBasicMaterial({ color: red }));
    puppet["pernaE"] = pernaE;
    pivotPernaE.add(pernaE)
    pernaE.position.y -= 5.6;
    pernaE.position.x -= 1.4;

    let joelhoE = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    puppet["joelhoE"] = joelhoE;
    pernaE.add(joelhoE);
    joelhoE.position.y = joelhoE.position.y - 2.1;

    let pivotJoelhoE = new THREE.Group();
    puppet["pivotJoelhoE"] = pivotJoelhoE;
    joelhoE.add(pivotJoelhoE);

    let canelaE = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), new THREE.MeshBasicMaterial({ color: red }));
    puppet["canelaE"] = canelaE;
    pivotJoelhoE.add(canelaE)
    canelaE.position.y -= 2;





    elementos["puppet"] = puppet;
    scene.add(tronco);

};



var init = function () {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 150);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 80;
    camera.position.x = 0;
    camera.position.y = 2;

    criaMonstro();


    animation();


    document.addEventListener('keydown', apertouButao);
    document.addEventListener('keyup', soltouBotao);

    //metodos do mouser
    document.addEventListener('mousewheel', onMouseWheel);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseClick);
    document.addEventListener('mouseup', onMouseUp);


};

var clicando = false;
var mouserPosAnterior = {
    x: 0,
    y: 0
}

var onMouseMove = function (e) {
    let diferencaMovimento = {
        x: e.offsetX - mouserPosAnterior.x,
        y: e.offsetY - mouserPosAnterior.y
    }

    if (clicando) {

        let angulosQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(paraRadianos(diferencaMovimento.y) * 0.5,
                paraRadianos(diferencaMovimento.x) * 0.5,
                0,
                'XYZ')
        );
        elementos["puppet"]["tronco"].quaternion.multiplyQuaternions(angulosQuaternion, elementos["puppet"]["tronco"].quaternion);
    }
    mouserPosAnterior = {
        x: e.offsetX,
        y: e.offsetY
    }
};

var onMouseClick = function (e) {
    clicando = true;
};

var onMouseUp = function (e) {
    clicando = false;
};

var onMouseWheel = function (e) {
    //for (let el in elementos){
    elementos["puppet"]["tronco"].scale.x += (e.deltaY > 0) ? -0.1 : 0.1;
    elementos["puppet"]["tronco"].scale.y += (e.deltaY > 0) ? -0.1 : 0.1;
    elementos["puppet"]["tronco"].scale.z += (e.deltaY > 0) ? -0.1 : 0.1;
    //

}



var key_r = true;
var key_space = true;
var key_q = false;

var soltouBotao = function (e) {

    if (e.keyCode == 82) { //r
        key_r = false;
    }
    if (e.keyCode == 32) { //espaço
        key_space = false;
    }
    if (e.keyCode == 81) { //espaço
        key_q = false;
    }
}


var apertouButao = function (e) {

    // if (e.keyCode == 82) { //r
    //     key_r = true;
    // }
    // if (e.keyCode == 32) { // space
    //     key_space = true;
    // }

    // if (e.keyCode == 81) { // q
    //     key_q = true;
    // }

}

var count = 0;
var velocidadeOmbroDireitoC = -0.01;
var velocidadeOmbroDireitoL = -0.01;

var velocidadeOmbroEsquerdoC = -0.01;
var velocidadeOmbroEsquerdoL = -0.01;

var velocidadePernaDireitoC = -0.01;
var velocidadePernaDireitoL = -0.01;

var velocidadeJoelhoDireitoC = -0.01;
var velocidadeJoelhoDireitoL = -0.01;

var velocidadeJoelhoEsquerdoC = -0.01;
var velocidadeJoelhoEsquerdoL = -0.01;

var velocidadePernaEsquerdaC = -0.01;
var velocidadePernaEsquerdaL = -0.01;

var velocidadeCotoveloDireitoC = -0.01;
var velocidadeCotoveloDireitoL = -0.01;

var velocidadeCotoveloEsquerdoC = -0.01;
var velocidadeCotoveloEsquerdoL = -0.01;

//bracos
movOmbroEsquerdo = function () {
    if (elementos["puppet"]["pivotOmbroE"].rotation.x < -2.83 || elementos["puppet"]["pivotOmbroE"].rotation.x > 1.3)
        velocidadeOmbroEsquerdoC *= -1;

    elementos["puppet"]["pivotOmbroE"].rotation.x += velocidadeOmbroEsquerdoC;
    if (elementos["puppet"]["pivotOmbroE"].rotation.z < 0 || elementos["puppet"]["pivotOmbroE"].rotation.z > 1.4)
        velocidadeOmbroEsquerdoL *= -1;

    elementos["puppet"]["pivotOmbroE"].rotation.z += velocidadeOmbroEsquerdoL;

}

movOmbroDireito = function () {
    if (elementos["puppet"]["pivotOmbroD"].rotation.x < -2.83 || elementos["puppet"]["pivotOmbroD"].rotation.x > 1.3)
        velocidadeOmbroDireitoC *= -1;

    elementos["puppet"]["pivotOmbroD"].rotation.x += velocidadeOmbroDireitoC;
    if (elementos["puppet"]["pivotOmbroD"].rotation.z < 0 || elementos["puppet"]["pivotOmbroD"].rotation.z > 1.4)
        velocidadeOmbroDireitoL *= -1;

    elementos["puppet"]["pivotOmbroD"].rotation.z += velocidadeOmbroDireitoL;

}

movCotoveloDireito = function () {
    if (elementos["puppet"]["pivotCotoveloD"].rotation.x < -1 || elementos["puppet"]["pivotCotoveloD"].rotation.x > 1)
        velocidadeCotoveloDireitoC *= -1;

    elementos["puppet"]["pivotCotoveloD"].rotation.x += velocidadeCotoveloDireitoC;
    if (elementos["puppet"]["pivotCotoveloD"].rotation.z < 0 || elementos["puppet"]["pivotCotoveloD"].rotation.z > 1)
        velocidadeCotoveloDireitoL *= -1;
}

movCotoveloEsquerdo = function () {
    if (elementos["puppet"]["pivotCotoveloE"].rotation.x < -1 || elementos["puppet"]["pivotCotoveloE"].rotation.x > 1)
        velocidadeCotoveloEsquerdoC *= -1;

    elementos["puppet"]["pivotCotoveloE"].rotation.x += velocidadeCotoveloEsquerdoC;
    if (elementos["puppet"]["pivotCotoveloE"].rotation.z < 0 || elementos["puppet"]["pivotCotoveloE"].rotation.z > 1)
        velocidadeCotoveloEsquerdoL *= -1;
}

//pernas
movPernaDireita = function () {
    elementos["puppet"]["pivotPernaD"].rotation.x += velocidadePernaDireitoC;
    if (elementos["puppet"]["pivotPernaD"].rotation.x > 0 || elementos["puppet"]["pivotPernaD"].rotation.x < -1)
        velocidadePernaDireitoC *= -1;
}

movPernaEsquerda = function () {
    elementos["puppet"]["pivotPernaE"].rotation.x += velocidadePernaEsquerdaC;
    if (elementos["puppet"]["pivotPernaE"].rotation.x > 1 || elementos["puppet"]["pivotPernaE"].rotation.x < 0)
        velocidadePernaEsquerdaC *= -1;
}
movJoelhoDireito = function () {
    elementos["puppet"]["pivotJoelhoD"].rotation.x += velocidadeJoelhoDireitoL;
    if (elementos["puppet"]["pivotJoelhoD"].rotation.x > 1 || elementos["puppet"]["pivotJoelhoD"].rotation.x < 0){
        velocidadeJoelhoDireitoL *= -1;
    }
}
movJoelhoEsquerdo = function () {
    elementos["puppet"]["pivotJoelhoE"].rotation.x += velocidadeJoelhoDireitoL;
    if (elementos["puppet"]["pivotJoelhoE"].rotation.x > 1.8 || elementos["puppet"]["pivotJoelhoE"].rotation.x < 0.8){
        velocidadeJoelhoDireitoL *= -1;
    }
}




var animation = function () {
    requestAnimationFrame(animation); //adiciona o método na fila de renderização

    //ombros
    movOmbroDireito();
    movOmbroEsquerdo();
    //cotovelos
    movCotoveloDireito();
    movCotoveloEsquerdo();
    //pernas
    movPernaEsquerda();
    movPernaDireita();
    movJoelhoDireito();
    movJoelhoEsquerdo();

    if (key_q) {
        elementos["puppet"]["tronco"].rotation.y += 0.01;
    }


    renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}

function paraRadianos(angulo) {
    return angulo * (Math.PI / 180);
}

window.onload = this.init