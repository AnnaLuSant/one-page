/**
 * 
 * @author Anna Luiza Ferreira Dos Santos
 */

// Recolher o menu na rolagem
window.addEventListener('scroll' ,() => {
    let menuCheck = document.getElementById('check')
    // Se a caixa checked estiver selecionada
    if(menuCheck.checked){
        menuCheck.checked = false
    }
})
