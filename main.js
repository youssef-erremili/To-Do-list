let btnResult = document.querySelector("#btnRsult")
let ulList = document.querySelector(".ulList")
let todoValue = document.querySelector("#todoValue")

btnResult.addEventListener("click", function () {
    if (todoValue.value.trim() !== "") {
        let liList = document.createElement("li")
        let btnRemove = document.createElement("button")
        btnRemove.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`
        btnRemove.setAttribute("class", "btnRemove")
        liList.innerHTML = `${todoValue.value}`
        ulList.appendChild(liList)
        liList.appendChild(btnRemove)
        todoValue.value = ""
        btnRemove.addEventListener("click", () => {
            ulList.removeChild(liList)
        })
        liList.addEventListener("dblclick", () => {
            liList.classList.add("deleteTask")
        })
    } else {
        Swal.fire({
            title: "Oops?",
            text: "The input field is empty?",
            icon: "question"
        });
    }
})

