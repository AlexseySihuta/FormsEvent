// document.querySelector('button[name=move]').preventDefault()
document.querySelector('button[name=move]').addEventListener('click', ()=>{
    event.preventDefault()
    if(document.querySelector('input[name=in1]').value != '') {
        document.querySelector('input[name=in2]').value = document.querySelector('input[name=in1]').value
        document.querySelector('input[name=in1]').value = ''
    }
})

document.querySelector('input[name=in3]').addEventListener('blur', ()=>{
    document.querySelector('input[name=in3]').placeholder = document.querySelector('input[name=in3]').value
    document.querySelector('input[name=in3]').value = ''
})