var button = document.getElementById("add");

var shown = document.getElementById("title");

var btn1;

var btn2;

var btn3;

var div1;

var para1;

button.addEventListener("click", function () {


    var show = document.getElementById("clip");
    var get = show.value;


    div1 = document.createElement("div");
    div1.classList.add("btn-list");
    shown.appendChild(div1);

    para1 = document.createElement("p");
    para1.classList.add("para1");
    div1.appendChild(para1);


    btn1 = document.createElement("button");
    btn1.classList.add("btn1");
    btn1.innerHTML = "Delete";
    div1.appendChild(btn1);

    btn2 = document.createElement("button");
    btn2.classList.add("btn2");
    btn2.innerHTML = "Edit";
    div1.appendChild(btn2);

    btn3 = document.createElement("button");
    btn3.classList.add("btn3");
    btn3.innerHTML = "Done";
    div1.appendChild(btn3);

    para1.innerHTML = get;

    btn1.addEventListener("click", function () {

        this.parentNode.remove();
    })

    btn2.addEventListener("click", function () {
        this.parentNode.firstChild.contentEditable = true;
        this.nextElementSibling.classList.add("hide");
        this.parentNode.firstChild.style.backgroundColor = "#5DADE2";
    })
    btn3.addEventListener("click", function () {
        this.classList.remove("hide");
        this.parentNode.firstChild.style.backgroundColor = "#EC7063";
        this.parentNode.firstChild.contentEditable = false;
    })


})





