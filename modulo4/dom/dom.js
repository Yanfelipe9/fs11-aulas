const saudacao = document.getElementById("saudacao")
const nomeUsuario = "Yan"

const agoraHora = new Date().getHours()
const agoraMinuto = new Date().getMinutes()

const hora = `${agoraHora}:${agoraMinuto}`

if(agoraHora < 12){
    saudacao.innerHTML = `Bom dia ${nomeUsuario}, são ${hora}`
} else if (agoraHora >= 12 && agoraHora <= 17){
    saudacao.innerHTML = `Boa tarde ${nomeUsuario}, são ${hora}`
} else {
    saudacao.innerHTML = `Boa noite ${nomeUsuario}, são ${hora}`
}




