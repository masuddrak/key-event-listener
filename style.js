
document.getElementById('secretBtn').addEventListener('click',function(){
    document.getElementById('secretInfo').style.display='none'
});
// focus
document.getElementById('deleteConfram').addEventListener('focus',function(){
    document.body.style.backgroundColor='green'
});
// blur
document.getElementById('deleteConfram').addEventListener('blur',function(){
    document.body.style.backgroundColor='white';
});
// keydown
// document.getElementById('deleteConfram').addEventListener('keydown',function(){
//     const deletFile=document.getElementById('deleteConfram');
//     console.log(deletFile.value)
// })
// keypress
// document.getElementById('deleteConfram').addEventListener('keypress',function(){
//     const deletFile=document.getElementById('deleteConfram');
//     console.log(deletFile.value)
// })
// keyup
document.getElementById('deleteConfram').addEventListener('keyup',function(event){
   const secretBtn= document.getElementById('secretBtn')
    if(event.target.value=='Delet'){
        secretBtn.removeAttribute('disabled');
    }
   else{
        secretBtn.setAttribute('disabled', true);
    }
})
// change
// document.getElementById('deleteConfram').addEventListener('change',function(){
//     const deletFile=document.getElementById('deleteConfram');
//     console.log(deletFile.value)
// })