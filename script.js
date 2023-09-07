let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight= null;
        } else {
            let currentActive = document.querySelectorAll(".collapsible.active")
            for(let j=0; j<currentActive.length; j++){
                currentActive[j].nextElementSibling.style.maxHeight = null;
            }
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}