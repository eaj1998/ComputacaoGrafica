var scene; //mundo virtual
var camera; //area de visualização
var renderer; //responsavel por renderizar tudo

var elementos = [];
var velocidade__cone_x = 0.05;
var velocidade__cone_y = 0.05;

var velocidade__rodinha_x = 0.05;
var velocidade__rodinha_y = 0.05;

var criarCone = function () {
    const geometry = new THREE.ConeGeometry(2, 2, 3);
    const material = new THREE.MeshBasicMaterial({ color: "#ff00ff" });
    const cone = new THREE.Mesh(geometry, material);

    elementos["cone"] = cone;

    elementos["cone"].position.x = Math.floor(Math.random() * 30);
    elementos["cone"].position.y = Math.floor(Math.random() * 18);

    scene.add(cone);
}


var criarRodinha = function () {

    const geometry = new THREE.CircleGeometry(1, 32);
    const material = new THREE.MeshBasicMaterial({ color: "#99ff35" });
    const circle = new THREE.Mesh(geometry, material);

    elementos["rodinha"] = circle;

    elementos["rodinha"].position.x = Math.floor(Math.random() * 30);
    elementos["rodinha"].position.y = Math.floor(Math.random() * 18);
    scene.add(circle);

}

var init = function () {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 50;
    camera.position.x = 0;
    camera.position.y = 2;

    criarRodinha();
    criarCone();
    animation();

};

var velocidadeRodinha = function () {
    elementos["rodinha"].position.x -= velocidade__rodinha_x;
    elementos["rodinha"].position.y += velocidade__rodinha_y;

    if (elementos["rodinha"].position.x < -35) {
        velocidade__rodinha_x *= -1;

    }
    if (elementos["rodinha"].position.x > 35) {
        velocidade__rodinha_x *= -1;
    }

    if (elementos["rodinha"].position.y < -15) {
        velocidade__rodinha_y *= -1;

    }

    if (elementos["rodinha"].position.y > 20)
        velocidade__rodinha_y *= -1;
}

var velocidadeCone = function () {

    elementos["cone"].position.x -= velocidade__cone_x;
    elementos["cone"].position.y += velocidade__cone_y;

    if (elementos["cone"].position.x < -35) {
        velocidade__cone_x *= -1;

    }
    if (elementos["cone"].position.x > 35) {
        velocidade__cone_x *= -1;
    }

    if (elementos["cone"].position.y < -15) {
        velocidade__cone_y *= -1;

    }

    if (elementos["cone"].position.y > 20)
        velocidade__cone_y *= -1;
}
var animation = function () {
    requestAnimationFrame(animation); //adiciona o método na fila de renderização    

    velocidadeCone(); //CONTROLA O CONE

    velocidadeRodinha(); //CONTROLA A RODA


    renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}

window.onload = this.init