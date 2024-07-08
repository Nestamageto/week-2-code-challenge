
document.getElementById('addItemButton').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const newItemName = itemInput.value;
    if (newItemName) {
        const listItem = document.createElement('li');
        listItem.textContent = newItemName;
        const purchased = document.createElement ("button")
        purchased.textContent = "purchase"
        purchased.id = "purchased"  
        purchased.addEventListener("click", function(){
            purchased.textContent = "purchased"
            purchased.style.color = "black"

        })
        listItem.appendChild(purchased)
        this.DOCUMENT_POSITION_CONTAINED_BY.getitembyid
        document.getElementById('shoppingList').appendChild(listItem);
        itemInput.value = '';
    }
});

document.getElementById('clearListButton').addEventListener('click', function() {
    document.getElementById('shoppingList').innerHTML = '';
});
