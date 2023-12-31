const targets = document.getElementsByClassName("target"); //HTMLCollection
document.getElementById("el-draggable").addEventListener('dragstart', empiezaArrastre);

for (var i = 0, j = targets.length; i < j; i++) {
    targets[i].addEventListener('dragover', permiteColocacion);
    targets[i].addEventListener('dragleave', removerColor);
    targets[i].addEventListener('drop', colocacion);
}

function removerColor(event) {
    console.log(event)
    event.currentTarget.style.background = "#FFFFFF";
}

function permiteColocacion(event) {
    event.currentTarget.style.background = "#FFF9C4";
    event.preventDefault();
}

function empiezaArrastre(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function colocacion(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}