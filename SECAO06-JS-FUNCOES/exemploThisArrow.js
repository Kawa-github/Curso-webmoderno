var artista = 'The Beatles'

let bar = {
    artista: 'Dire Straits'
}

let show = {
    artista: 'Blind Guardian'
}

let tocar = () => { 
    console.log(`Estamos tocando ${this.artista}!`)
}

let tocarParaTodos = tocar // Usamos a função com o contexto global
let tocarEmBar = tocar.bind(bar) // Alteramos o contexto para o bar
let tocarEmShow = tocar.bind(show) // Alteramos o contexto para o show

tocarParaTodos() // Estamos tocando The Beatles!
tocarEmBar() // Estamos tocando The Beatles!
tocarEmShow() // Estamos tocando The Beatles!