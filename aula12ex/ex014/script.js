window.alert('Olá!')

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 5 && hora < 12){
        img.src = 'foto-manhã.png'
        document.body.style.background = '#dfc390'
    } else if (hora >= 12 && hora < 18){
        img.src = 'foto-tarde.png'
        document.body.style.background = '#e08349'
    } else{
        img.src = 'foto-noite.png'
        document.body.style.background = '#162c39'
    }
}