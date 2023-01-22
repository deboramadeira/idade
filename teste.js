function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var foto = document.getElementById('foto')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Confira os dados novamente!')
    } else {
        var fgen = document.getElementsByName('radgen')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fgen[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                foto.src = 'imagem/foto-bebe-m.png'
            } else if (idade < 21) {
                foto.src = 'imagem/foto-jovem-m.png'

            } else if (idade < 50) {
                foto.src = 'imagem/foto-adulto-m.png'

            } else {
                foto.src = 'imagem/foto-idoso-m.png'

            }
        } else if (fgen[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                foto.src = 'imagem/foto-bebe-f.png'
            } else if (idade < 21) {
                foto.src = 'imagem/foto-jovem-f.png'

            } else if (idade < 50) {
                foto.src = 'imagem/foto-adulto-f.png'

            } else {
                foto.src = 'imagem/foto-idoso-f.png'

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(foto)

    }
}
