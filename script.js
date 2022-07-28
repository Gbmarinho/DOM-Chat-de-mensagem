const btnenvia = document.querySelector('.btn-envia')
const localescrita = document.querySelector('#local-mensagens')
const texto = document.querySelector('.text')
// const div = document.createElement('div')
// const div1 = document.createElement('div')
// const ul = document.createElement('ul')
// const li = document.createElement('li')
// const p = document.createElement('p')
// const btn = document.createElement('button')
// const btn1 = document.createElement('button')

btnenvia.addEventListener("click", () => {
    var digitado = texto.value.trim();
    const div = document.createElement('div')
    const div1 = document.createElement('div')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const p = document.createElement('p')
    const btn = document.createElement('button')
    const btn1 = document.createElement('button')
    localescrita.append(ul)
    ul.setAttribute('class', 'mensagens')
    ul.append(li)
    li.setAttribute('class', 'container')
    li.append(div)
    div.setAttribute('class', 'escreve')
    div.append(p)
    p.innerText = `${digitado}`
    li.append(div1)
    div1.setAttribute('class', 'button')
    div1.append(btn)
    btn.setAttribute('class','editar')
    btn.innerHTML = "Editar"
    div1.append(btn1)
    btn1.setAttribute('class','excluir')
    btn1.innerHTML = "Excluir"
    if(texto.value == ""){
        alert("Por favor digite algo") 
    }
    console.log(digitado)
    texto.value = ""
})