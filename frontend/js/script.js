const input = document.getElementById('input_user');
const botao = document.getElementById('btn_send');

const visualizacao_comix = document.getElementById('direcionar_comix');

// Detecta se está em produção ou desenvolvimento
const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
const baseURL = isProduction ? window.location.origin : 'http://localhost:3000';

const api = axios.create({
    baseURL: baseURL
})

let resposta_gerada = "";
let pergunta_gerada = "";

async function perguntaUsuario() {
    let input_usuario = input.value;
    if ((input_usuario !== null) && (input_usuario !== " ") && (input_usuario!==undefined)) {

    await api.get(`/api/usuario`, {
        params:{pergunta:input_usuario}
    })
    .then (res => {

        pergunta_gerada = `

                <div class="containerUser" id="askUser">
                    <div class="chatUser">
                        <p>
                            ${input_usuario}
                        </p>
                    </div>
                    <img src="imagens/icone_usuario.png">
                </div>
                `
        visualizacao_comix.innerHTML += pergunta_gerada

        resposta_gerada = `
        
        <div class="containerComix" id="responseComix">
                <img src="imagens/comix.png">
                <div class="chatComix">
                    <p>
                        ${res.data.resposta || res.data}
                    </p>
                </div>
            </div>
            `

        setTimeout(function(){
            visualizacao_comix.innerHTML += resposta_gerada;
            
        }, 2000);
    })
    }
    input.value = "";
    input.focus();
}

document.addEventListener("keyup", function(event){
    if (event.keyCode == 13) {

        event.preventDefault();
        botao.click();

    }
})