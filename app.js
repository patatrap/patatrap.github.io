let img = [
    './img/T/AubreyKate.jpg',
    './img/T/ChenLili.jpg',
    './img/T/ChoiHanBit.jpg',
    './img/T/EricaAndrews.jpg',
    './img/T/JuliaKaye.jpg',
    './img/T/KimCocoIwamoto.jpg',
    './img/T/KristinBeck.jpg',
    './img/T/LeynaBloom.jpg',
    './img/T/NathalieMars.jpg',
    './img/T/SphereHunter.jpg',
    './img/NT/ElisaAguilar.jpg',
    './img/NT/FeliceHerrig.jpg',
    './img/NT/FreyaAnderson.jpg',
    './img/NT/GaetaneThiney.jpg',
    './img/NT/JessicaEye.jpg',
    './img/NT/KarolinaPliskova.jpg',
    './img/NT/MarieAntoinetteKatoto.jpg',
    './img/NT/PortiaWoodman.jpg',
    './img/NT/RanomiKromowidjojo.jpg',
    './img/NT/TajamaAbraham.jpg'
];
const t = [
    './img/T/AubreyKate.jpg',
    './img/T/ChenLili.jpg',
    './img/T/ChoiHanBit.jpg',
    './img/T/EricaAndrews.jpg',
    './img/T/JuliaKaye.jpg',
    './img/T/KimCocoIwamoto.jpg',
    './img/T/KristinBeck.jpg',
    './img/T/LeynaBloom.jpg',
    './img/T/NathalieMars.jpg',
    './img/T/SphereHunter.jpg',
]
const nt = [
    './img/NT/ElisaAguilar.jpg',
    './img/NT/FeliceHerrig.jpg',
    './img/NT/FreyaAnderson.jpg',
    './img/NT/GaetaneThiney.jpg',
    './img/NT/JessicaEye.jpg',
    './img/NT/KarolinaPliskova.jpg',
    './img/NT/MarieAntoinetteKatoto.jpg',
    './img/NT/PortiaWoodman.jpg',
    './img/NT/RanomiKromowidjojo.jpg',
    './img/NT/TajamaAbraham.jpg'
] 
let falseResponse = [];
let score = 0;

const container = document.getElementById("container");
const imgContainer = document.createElement("img");

/* const scoreElement = document.createElement("p"); */
/* scoreElement.innerHTML = "score : " + score; */
/* document.body.appendChild(scoreElement); */

const yes = document.getElementById("yes");
const no  = document.getElementById("no");
const h2  = document.getElementById("progression");

const result = document.createElement("button");
result.innerHTML = "Result";

const reload = document.createElement("button");
reload.innerHTML = "Reload";

let prog = 1;
h2.innerHTML = prog + "/20"

rng = Math.floor(Math.random()*20)
imgContainer.src = img[rng];

container.appendChild(imgContainer);
console.log(img[rng]);

let i = 19;

function randomCard(){
    if(i != 0 && prog <20){
        img.splice(rng,1);
        rng = Math.floor(Math.random()*i)
        imgContainer.src = img[rng];
        i--;
        prog++;
        console.log(img[rng]);
        //console.log(falseResponse);
        console.log(score);

        


    }else{
        imgContainer.src = "img/fin.png";
        yes.remove() ;
        no.remove() ;
        document.body.appendChild(result);
    }

}
//console.log(img);
console.log(falseResponse);

        
yes.onclick = function() {checkT() ; /* scoreElement.innerHTML = "score : " + score */  ; randomCard() ; h2.innerHTML = prog + "/20"; }; 
no.onclick  = function() {checkNT(); /* scoreElement.innerHTML = "score : " + score */  ; randomCard() ; h2.innerHTML = prog + "/20"; };

function checkT(){
    if(t.includes(img[rng]) && prog <21){
        score++
    }
    else(falseResponse.push(img[rng]));

}

function checkNT(){
    if(nt.includes(img[rng]) && prog <21){
        score++
    }
    else(falseResponse.push(img[rng]));
}

result.onclick = ()=> {
    container.remove();
    result.remove();
    h2.innerHTML = "Score: " + score + "/20" + "<br/>" +  resultPhraseF();
    document.body.appendChild(reload);
    document.body.appendChild(document.createElement("br"));
    console.log(falseResponse);

    falseResponse.forEach(function(el){
        let img = document.createElement("img");
        img.src = el;
        let txt = document.createElement("p");
        let br = document.createElement("p");
        br.innerHTML = "---------------------------"

        txt.innerHTML = reaveal(el);
        document.body.appendChild(img);
        document.body.appendChild(txt);
        document.body.appendChild(br);

        
    })
}

reload.onclick = () => location.reload();

function reaveal(i){
    if(nt.includes(i)){
        return "Femme";
    }else return "Trans";
}

