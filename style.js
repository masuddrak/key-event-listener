const items=document.getElementsByClassName('item');
for(const item of items){
    item.addEventListener('click',function(event){
        // document.getElementById('listContainer').removeChild(item)
        event.target.parentNode.removeChild(event.target)
    })
}
// create item
document.getElementById('addItem').addEventListener('click',function(){
    const li=document.createElement('li');
    li.innerText='new item';
    // li.classList.add('item');
    const parent=document.getElementById('listContainer');
    parent.appendChild(li);
})
document.getElementById('listContainer').addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target)
})