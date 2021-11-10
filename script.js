let toggler = document.querySelector('.container-toggler')

toggler.onclick = ()=>{
    toggler.classList.toggle('active')
    if(toggler.classList.contains('active')){
        document.body.classList.add('active')
    }else{
        document.body.classList.remove('active')
    }
}

document.querySelectorAll('.color').forEach(color =>{
    color.onclick = () => {
        let background = color.style.background;
        document.querySelector(':root').style.setProperty('--main-color', background)
    }
})

let tema = document.querySelector('.tema-container')

document.querySelector('#open-tema').onclick = () => {
    tema.classList.add('active')
    document.body.style.paddingRight = '350px'
}
document.querySelector('#tema-close').onclick = () => {
    tema.classList.remove('active')
    document.body.style.paddingRight = '0'
}