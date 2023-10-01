function addItem() {
    const itemName = document.querySelector("#itemName");
    if (itemName === "") {
        return;
    }
    
    const items = document.querySelector(".items");

    const li = document.createElement("li");
    li.classList.add("item")
    const span = document.createElement("span");
    span.textContent = itemName.value;
    itemName.value = "";
    itemName.focus();
    const btn = document.createElement("button");
    btn.addEventListener("click", () => {
        li.remove();
    });
    btn.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(btn);
    items.appendChild(li);

}

const add = document.querySelector("#add");
add.addEventListener("click", addItem)
