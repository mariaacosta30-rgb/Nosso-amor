const cartas = [

{
titulo:"O início de tudo",
texto:"Às vezes eu paro para pensar em como a minha vida era antes de você e percebo o quanto ela mudou. Você trouxe cor para dias comuns e transformou momentos simples em memórias especiais."
},

{
titulo:"Meu lugar favorito",
texto:"Meu lugar favorito não é uma cidade ou uma praia. Meu lugar favorito é qualquer lugar onde você esteja."
},

{
titulo:"Orgulho de você",
texto:"Tenho muito orgulho da pessoa que você é e da pessoa incrível que está se tornando."
},

{
titulo:"Obrigada por existir",
texto:"Obrigada pelos abraços, pelas risadas, pelo carinho e por tornar minha vida mais feliz."
},

{
titulo:"Nosso futuro",
texto:"Quando penso no futuro, imagino nós dois realizando sonhos e construindo uma linda história."
},

{
titulo:"As pequenas coisas",
texto:"São os pequenos momentos que mais guardo: nossas conversas, brincadeiras e olhares."
},

{
titulo:"Você me faz melhor",
texto:"Com você aprendi mais sobre amor, parceria e companheirismo."
},

{
titulo:"Meu porto seguro",
texto:"Seu abraço tem o poder de transformar qualquer dia difícil em algo mais leve."
},

{
titulo:"Meu melhor amigo",
texto:"Além de namorado, você é meu melhor amigo e minha pessoa favorita."
},

{
titulo:"Para sempre você",
texto:"Se eu pudesse escolher você mil vezes, escolheria mil e uma."
}

];

const motivos = [

"Seu sorriso",
"Seu abraço",
"Sua risada",
"Sua inteligência",
"Seu carinho",
"Seu respeito",
"Sua sinceridade",
"Sua dedicação",
"Seu companheirismo",
"Sua gentileza",
"Seu coração",
"Sua paciência",
"Sua força",
"Sua coragem",
"Sua lealdade",
"Sua forma de me olhar",
"Sua voz",
"Seu jeito de cuidar de mim",
"Seu apoio",
"Sua presença",
"Seu bom humor",
"Sua maturidade",
"Seu jeito único",
"Seu esforço",
"Sua determinação",
"Seu romantismo",
"Sua empatia",
"Sua bondade",
"Seu sorriso quando me vê",
"Seu abraço apertado",
"Seu amor",
"Sua amizade",
"Seu respeito pelos meus sonhos",
"Seu incentivo",
"Seu carinho nos detalhes",
"Sua atenção",
"Seu jeito protetor",
"Sua honestidade",
"Seu coração gigante",
"Seu olhar",
"Seu toque",
"Sua companhia",
"Sua compreensão",
"Seu jeito de me fazer rir",
"Sua confiança",
"Sua calma",
"Sua autenticidade",
"Seu jeito de amar",
"Você me faz feliz",
"Porque você é você"
];

function mostrarCarta(){

    const carta =
    cartas[Math.floor(Math.random() * cartas.length)];

    document.getElementById("resultado").innerHTML = `
        <div class="card">
            <h2>💌 ${carta.titulo}</h2>
            <p>${carta.texto}</p>
        </div>
    `;
}

function mostrarMotivo(){

    const motivo =
    motivos[Math.floor(Math.random() * motivos.length)];

    document.getElementById("resultado").innerHTML = `
        <div class="card">
            <h2>❤️ Motivo Para Amar Você</h2>
            <p>${motivo}</p>
        </div>
    `;
}

/* ALTERE PARA A DATA DE VOCÊS */
const dataNamoro = new Date("2024-01-01");

function atualizarContador(){

    const hoje = new Date();

    const diferenca =
    hoje.getTime() - dataNamoro.getTime();

    const dias =
    Math.floor(diferenca / (1000 * 60 * 60 * 24));

    document.getElementById("contador").innerHTML =
    `❤️ Juntos há ${dias} dias ❤️`;
}

atualizarContador();