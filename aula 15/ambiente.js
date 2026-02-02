let num = [3,2,1]

num[3] = 7

// ADICIONA UM VALOR AO FINAL DO ARRAY
num.push(6)

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

// ORDENA OS VALORES DE FORMA CRESCENTE
num.sort()

console.log(`O vetor, em ordem crescente, é: [${num}]`)


let pos = num.indexOf(6)    // Procura o valor "6"
if(pos == -1){              // "-1" aparece quando o valor não existe no vetor 
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor está na posição ${pos}`)
}