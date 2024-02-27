let cor = document.getElementsByName('color')
//cor.addEventListener("click",corSelect)

function corSelect(){        
    if(cor[1].checked){ //grafite
        document.getElementById('img').src='imagens/iphone_grafite.jpg'
    } else if(cor[2].checked){ //azul
        document.getElementById('img').src='imagens/iphone_blue.jpg'
    } else if(cor[3].checked){ //silver
        document.getElementById('img').src='imagens/iphone_silver.jpg'
    } else if(cor[4].checked){ //verde
        document.getElementById('img').src='imagens/iphone_green.jpg'
    } else{ //dourado
        document.getElementById('img').src='imagens/iphone_golden.jpg'
    }      
}
