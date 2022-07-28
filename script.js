const btnenvia = document.querySelector('.btn-envia')
btnenvia.addEventListener("click", () => {
    const mensagensbox = document.querySelector('#local-mensagens')
    const texto = document.querySelector('.text')
    const ul = document.createElement('ul')
    ul.classList.add("mensagens")
    ul.innerHTML = `<li class="container">
    <div class="escreve">
        <p>${texto.value}</p>
    </div>
    <div class="button">
        <button class="editar" onclick="edit(this)">Editar</button>
        <button class="excluir" onclick="excluir(this)">Excluir</button>
    </div>
</li>`
    mensagensbox.appendChild(ul)
    texto.value = ""
})
function edit(){

}
function excluir(check){
    check.parentNode.parentNode.remove()
}
