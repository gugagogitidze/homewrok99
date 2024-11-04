document.getElementById("addInfoButton").addEventListener("click", function() {
    const info = prompt("გთხოვთ შეიყვანეთ ინფორმაცია:");

    if (info) {
        addListItem(info);
    } else {
        alert("შეიყვანეთ ინფორმაცია.");
    }
});

function addListItem(info) {
    const li = document.createElement("li");
    li.textContent = info;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(deleteButton);
    document.getElementById("infoList").appendChild(li);
}