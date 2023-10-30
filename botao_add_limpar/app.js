/* ----------------------------------------------------------------------------

Exercício: 016
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
    Não importa a ordem das palavras e frases.
    Quando clicar em "Limpar", todas as palavras e frases devem desaparecer
    e o input deve ficar limpo e receber o focus.

    NOTA: O HTML não pode ser alterado.
---------------------------------------------------------------------------- */

let btn_add = document.querySelector('#btn1')
let btn_limpar = document.querySelector('#btn2')
let caixaTexto = document.querySelector('#text_post')
let p


//adicionar
btn_add.addEventListener('click', () => {
    if(caixaTexto.value !== ''){
        p = document.createElement('p')
        p.textContent = caixaTexto.value
        document.querySelector('#posts').appendChild(p)
        caixaTexto.value = ''
        caixaTexto.focus()
    }
})

//limpar
btn_limpar.addEventListener('click', () => {
    document.querySelector('#posts').innerHTML = ''
    caixaTexto.value = ''
    caixaTexto.focus()
})

