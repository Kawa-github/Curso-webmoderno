function Pessoa(){
    this.idade = 0
    
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa




function Aluno(nome,nota){
 return nome && nota   
}

console.log(Aluno("jose",10))