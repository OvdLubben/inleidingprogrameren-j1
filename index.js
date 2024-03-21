let timer = '';

function startMetTellen() {
    let tijdNogTeGaan = Math.ceil(document.getElementById('tijdvoortimer').value); 
    document.getElementById('antwoord').textContent = tijdNogTeGaan;

    timer = setInterval(function() {
        tijdNogTeGaan--;
        document.getElementById('antwoord').textContent = tijdNogTeGaan;


        if (tijdNogTeGaan <=0) {
            clearInterval(timer);
            document.getElementById('antwoord').textContent = "Tijd is op :*(";
            speelVerliesgeluid();
            document.getElementById('antwoord').style.color = "red";
        } 
    }, 1000);
}

document.getElementById('refreshknop').addEventListener('click', function(){
    clearInterval(timer);
    startMetTellen();
    document.getElementById('antwoord').style.color = "black"
})

document.getElementById('controleknop').addEventListener('click', function(){
    clearInterval(timer);
    controle();
    document.getElementById('antwoord').style.color = "black"
})



const opdrachten = ["stad in europa", "een soort fruit", "een automerk", "acteur of actrice", "beroep", "gerecht", "Disney film", "Sprookje"];
const kaarttekst = document.getElementById('kaart')

function kiesWoord(){
    const kiezer = Math.floor(Math.random() * opdrachten.length);
    let keuze = opdrachten[kiezer];
    document.getElementById('kaart').textContent = keuze;
}


const lettersAlfabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const tekstAlfabet = document.getElementById('lettersvanhetalfabet')
let alfabetKiezer = "";


function alfabet(){
    const willekeurig = Math.floor(Math.random() * lettersAlfabet.length); 
    alfabetKiezer = lettersAlfabet[willekeurig];
    tekstAlfabet.textContent = alfabetKiezer
}

alfabet();



function speelWingeluid() {
    const winGeluid = document.getElementById('wingeluid');
    winGeluid.currentTime = 0;
    winGeluid.play();
}


function speelVerliesgeluid() {
    const verliesGeluid = document.getElementById('verliesgeluid');
    verliesGeluid.currentTime = 0;
    verliesGeluid.play();
}



let eersteLetter = ''

function controle (){
    const tekstVeld = document.getElementById('antwoord')
    const inputWaarde = document.getElementById('inputveld').value;
    const letterGetrimt = inputWaarde.trim();
    let alfabetKiezerHoofdletter;

    if (letterGetrimt) {
        eersteLetter = letterGetrimt.charAt(0).toUpperCase(); 
        alfabetKiezerHoofdletter = alfabetKiezer.toUpperCase();
    }
    if (eersteLetter === alfabetKiezerHoofdletter) {
        tekstVeld.textContent = "Gefeliciteerd";
        tekstVeld.style.color = "yellow"
        speelWingeluid();
    } 
    else {
        tekstVeld.textContent = "Jammer"
        tekstVeld.style.color = "red"
        speelVerliesgeluid();
    }
}

document.getElementById('refreshknop').addEventListener('click', function() {
    kiesWoord()
    alfabet()
});

document.getElementById("controleknop").addEventListener('click', controle);