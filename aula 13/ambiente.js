//ESTRUTURA DE REPETIÇÃO COM TESTE LÓGICO NO INÍCIO
console.log('TESTE 1:')
var contador1 = 1 

while(contador1 <= 6){
    console.log(`Passo ${contador1}`)
    contador1++ // contador = contador + 1
}

console.log('------------------------------------')


//ESTRUTURA DE REPETIÇÃO COM TESTE LÓGICO NO FINAL
console.log('TESTE 2:')
var contador2 = 6

do{
    console.log(`Passo ${contador2}`)
    contador2-- // contador = contador - 1
} while(contador2 >= 1)
