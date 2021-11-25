var artista = 'The Beatles' 

function tocar () {
    console.log(`Estamos tocando ${this.artista}!`) //referenciado ao escopo global
}

let bar = {
    artista: 'Dire Straits',
    tocar: function () {
        console.log(`Vamos tocar ${this.artista}!`) //referencido especificamente dentro do atributo do objeto bar
    }
}

let show = {
    artista: 'Blind Guardian',
    tocar: function () {
        console.log(`Vamos tocar ${this.artista}`)
    }
}

tocar() // Estamos tocando The Beatles!
bar.tocar() // Vamos tocar Dire Straits!
show.tocar() // Vamos tocar Blind Guardian!