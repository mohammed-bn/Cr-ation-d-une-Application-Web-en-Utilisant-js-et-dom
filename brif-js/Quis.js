let compt = 0;
let scor = 0;

const list_question = [
    {
        question: "C'est quoi javascript?",
        A: "langage de programation",
        B: "méthode de travaille",
        C: "type de donne",
        D: "plan de travaille",
        corect_repons: 'langage de programation'
    },
    {
        question: "qelle les types de donne en javascript?",
        A: "int float char",
        B: "var let const",
        C: "var int char const",
        D: "string var constant",
        corect_repons: 'B'
    },
    {
        question: "c'est quoi le dom en java script?",
        A: "documment object modele",
        B: "modele origine momber",
        C: "dectioner de html",
        D: "dommend otorisation mobile",
        corect_repons: 'A'
    },
    {
        question: "celectione le fromwork de javascripts?",
        A: "tailwind",
        B: "spring bot",
        C: "laravel",
        D: "vue js",
        corect_repons: 'D'
    },
    {
        question: "c'est quoi le role de java script?",
        A: "code",
        B: "playe",
        C: "organisation",
        D: "control",
        corect_repons: 'A'
    },
]

let qst = document.getElementById('question');
let choix = document.getElementsByClassName('repons');
let prog = document.getElementsByClassName('progress');
let input_radio = document.getElementsByClassName('input-radio');

function nextQuestion() {
    if (compt < list_question.length) {
        qst.textContent = list_question[compt].question;

        choix[0].textContent = list_question[compt].A;
        choix[1].textContent = list_question[compt].B;
        choix[2].textContent = list_question[compt].C;
        choix[3].textContent = list_question[compt].D;

        // score(list_question[compt].corect_repons);
        compt++;

        prog[0].style.width = `calc(${compt}*20%)`;
        console.log(compt);

        score(list_question[compt].corect_repons);

        if (compt == list_question.length) {
            document.getElementById("submit").style.display = 'block'
            document.getElementById("next").style.display = 'none'
        }
    }
    else {
        document.getElementsByClassName("aff_scor")[0].style.display = 'flex'
    }
}

function preceQuestion() {
    if (compt > 0) {
        document.getElementsByClassName("aff_scor")[0].style.display = 'none'
        document.getElementById("next").style.display = 'block'
        document.getElementById("submit").style.display = 'none'

        compt -= 1;
        qst.textContent = list_question[compt].question;
        choix[0].textContent = list_question[compt].A;
        choix[1].textContent = list_question[compt].B;
        choix[2].textContent = list_question[compt].C;
        choix[3].textContent = list_question[compt].D;
        score(list_question[compt].corect_repons);
        prog[0].style.width = `calc(${compt}*20%)`;
        console.log(compt)
    }
    // if (compt == list_question.length)
    // {

    // }
    // 
}
console.log(compt)
console.log(list_question.length)

function score(corect) {

    for (let i = 0; i < input_radio.length; i++) {
        if (input_radio[i].checked) {
            if (input_radio[i].value === corect)
                scor++;
        }
    }
}