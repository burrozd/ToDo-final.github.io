const input = document.querySelector("input");
const addButton = document.querySelector("button");
const list = document.querySelector("ul");
const msg = document.querySelector("#message");
const completed = document.querySelector("p");
const toDoArray = [];

let text;
let message;
let completedCount = 0;

addButton.addEventListener(
    "click",

    function() {
        text = input.value;

        if (text.length == 0) {
            msg.innerHTML = "Du måste skriva något!";
            return;
        }
        msg.innerHTML = "";

        const toDoObject = {};
        toDoObject.todo = text;
        toDoObject.status = "not complete";

        const item = document.createElement("li");
        list.appendChild(item);

        const itemLabel = document.createElement("span");
        itemLabel.innerText = text; +
        item.appendChild(itemLabel);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "🗑";
        deleteButton.classList.add("deleteBtn");
        item.append(deleteButton);

        deleteButton.addEventListener("click", () => {
            item.removeChild(itemLabel);
            item.removeChild(deleteButton);
        });

        itemLabel.addEventListener("click", function() {
            item.setAttribute("class", "completed");
            completedCount++;
            completed.innerHTML = `${completedCount} är klara.`;
        });
    }
);