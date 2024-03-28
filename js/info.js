'use strict'
import { getFilmes, getFilmeByID, postFilme, deleteFilme } from "./filmes.js"

function criarCard(filme){
    // Card dos filmes 
    const card=document.createElement('div')
    card.classList.add('grid', 'p-4', '')

    // Retornar o nome do filme
    const titulo=document.createElement('h2')
    titulo.textContent=filme.nome
    titulo.classList.add('font-bold', 'grid' ,'text-white')

    // Mostrar a capa dos filmes 
    const capa = document.createElement('img')
    capa.src = filme.foto_capa
    capa.classList.add('w-capaWidth', 'h-capaHeight', 'rounded-md', 'border-solid', )
    

     // Adiciona evento de mouseover para aumentar a imagem
     capa.addEventListener('mouseover', function() {
        capa.style.transform = 'scale(2)'; // aumenta a escala para 1.1 (10% maior)
    });

    // Adiciona evento de mouseout para voltar ao tamanho original
    capa.addEventListener('mouseout', function() {
        capa.style.transform = 'scale(1)'; // volta ao tamanho original
    });


    card.append(capa, titulo)
    return card
}

async function preencherContainer(){
    const container=document.getElementById('lista')
    const filmes=await getFilmes()
    filmes.forEach (filme=>{
        const card=criarCard(filme)
        container.appendChild(card)
        console.log(card)
    })
}

preencherContainer()

console.log(getFilmes)