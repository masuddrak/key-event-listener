document.getElementById('secontItem').addEventListener('click',function(event){
    console.log('second1 item clicked')
    event.stopImmediatePropagation()
})
document.getElementById('secontItem').addEventListener('click',function(event){
    console.log('second2 item clicked')
})
document.getElementById('secontItem').addEventListener('click',function(event){
    console.log('second3 item clicked')
})
document.getElementById('secontItem').addEventListener('click',function(event){
    console.log('second4 item clicked')
})
// click listContainer
document.getElementById('listContainer').addEventListener('click',function(){
    console.log('listContainer')
})
// click sectionContainer
document.getElementById('sectionContainer').addEventListener('click',function(){
    console.log('sectionContainer')
})