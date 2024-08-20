<script src="main.js"></script>
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados= document.querySelector(".texto-resultados");

const perguntas = [
{
    enunciado: "base líquida ou em pó?",
    alternativas
                
    
    : [
        {
            texto: "líquida?",
            afirmacao: "# "
        },
        {
            texto: "em pó ?",
            afirmacao: "#."
        },
    ]
},
{
    enunciado: "Máscara de cílios à prova d'água ou normal?",
    alternativas: [
        {
            texto: "À prova d'água",
            afirmacao: "# "
        },
        {
            texto: "Normal",
            afirmacao: "#"
        },
    ]
},
{
    enunciado: "Delineado líquido ou em pasta?",
    alternativas: [
        {
            texto: "líquido",
            afirmacao: "# "
        },
        {
            texto: "em pasta",
            afirmacao: "#"
        },
    ]
},
{
     enunciado: "Pó compacto ou solto?",
    alternativas: [
        {
            texto: "compacto",
            afirmacao: "# "
        },
        {
            texto: "solto",
            afirmacao: "#"
        },
    ]
},
{
enunciado: "gloss líquido?",
alternativas [
    {
        texto: "gosto",
        afirmacao: "# "
    },
    {
        texto: "não gosto",
        afirmacao: "#"
    },
    ]
},
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    caixaAlternativas.textContent="";
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas[atual].enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        });        
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
