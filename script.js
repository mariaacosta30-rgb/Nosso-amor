const cartas = [
{
titulo:"O início de tudo",
texto:"Desde que você entrou na minha vida, os dias ficaram mais leves e felizes. Você transformou momentos simples em lembranças inesquecíveis."
},
{
titulo:"Meu lugar favorito",
texto:"Meu lugar favorito não é uma cidade ou uma praia. Meu lugar favorito é qualquer lugar onde você esteja."
},
{
titulo:"Orgulho de você",
texto:"Tenho orgulho da sua dedicação, da sua força e da pessoa incrível que você é."
},
{
titulo:"Obrigada por existir",
texto:"Obrigada por todos os abraços, conversas e momentos compartilhados."
},
{
titulo:"Nosso futuro",
texto:"Quando penso no futuro, imagino você em todos os meus planos."
},
{
titulo:"As pequenas coisas",
texto:"As pequenas coisas que você faz são exatamente as que mais guardo no coração."
},
{
titulo:"Você me faz melhor",
texto:"Você me inspira a crescer e a ser uma pessoa melhor todos os dias."
},
{
titulo:"Meu porto seguro",
texto:"Seu abraço tem o poder de trazer paz até nos dias mais difíceis."
},
{
titulo:"Meu melhor amigo",
texto:"Além de namorado, você é meu melhor amigo e meu maior parceiro."
},
{
titulo:"Para sempre você",
texto:"Se eu pudesse escolher novamente, escolheria você todas as vezes."
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

const cartasContainer = document.getElementById("cartas-container");

cartas.forEach(carta => {
    cartasContainer.innerHTML += `
        <div class="card">
            <h3>${carta.titulo}</h3>
            <p>${carta.texto}</p>
        </div>
    `;
});

const motivosContainer = document.getElementById("motivos-container");

motivos.forEach((motivo, index) => {
    motivosContainer.innerHTML += `
        <div class="card">
            <h3>Motivo ${index + 1}</h3>
            <p>${motivo}</p>
        </div>
    `;
});

const dataNamoro = new Date("2026-04-09");

function atualizarContador() {

    const hoje = new Date();

    const diferenca = hoje - dataNamoro;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    document.getElementById("contador").textContent =
        `Juntos há ${dias} dias`;
}

atualizarContador();