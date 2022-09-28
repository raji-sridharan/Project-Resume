const list = ["about","education","skills","projects","internships"]

function setMain(){
    view("about");
}

function view(section) {
    for(let i = 0; i < list.length; i++) {
        if( list[i] != section)
            console.log(list[i]);
            document.getElementById(list[i]).style.display = "none";
            document.getElementById("b".concat(list[i])).style.fontWeight = 400;
            
    }
    document.getElementById(section).style.display = "inline";
    document.getElementById("b".concat(section)).style.fontWeight = "bold";
    console.log(section);
}
