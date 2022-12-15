document.querySelector('.sing').addEventListener('click', () => {
    event.preventDefault()

    if (document.querySelector('input[type=checkbox').checked) {
        document.querySelector('.wrapper2').style.display = 'block'
        document.querySelector('.wrapper').style.display = 'none'
        document.querySelector('.name').innerText = document.querySelector('.fname').value + ' ' + document.querySelector('.sname').value
        document.querySelector('.gmail').innerText = document.querySelector('.email').value
        document.querySelector('.position').innerText = document.querySelector('.ww').value
        if (document.querySelector('.womenInput').checked) {
            document.querySelector('.imgWomen').style.display = 'block'
            document.querySelector('.imgMen').style.display = 'none'
        } else if (document.querySelector('.menInput').checked) {
            document.querySelector('.imgWomen').style.display = 'none'
            document.querySelector('.imgMen').style.display = 'block'
        }
        document.forms.f1.reset()
    } else {
        document.querySelector('.checkbox').style.color = 'red'
    }
})
document.querySelector('.singOut').addEventListener('click', () => {
    document.querySelector('.wrapper').style.display = 'block'
    document.querySelector('.wrapper2').style.display = 'none'
    document.querySelector('.checkbox').style.color = 'black'
})
