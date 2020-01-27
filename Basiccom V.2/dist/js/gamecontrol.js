var number = Math.floor(Math.random()*100)+1;
let text = "previous guess : "
let previous = document.querySelector("#previous").textContent = text




    function checkupdate(){
        var gettext = document.querySelector("input[name=guess]").value;
        if(gettext!==""){
            // numberOftimes++
            if(gettext>number){
                document.querySelector("#game").textContent = "Nope"
                document.querySelector("#status").textContent = "Too High"
                document.querySelector("#game").setAttribute("class", "democlass");
            }else if (gettext<number){
                document.querySelector("#game").textContent = "Nope"
                document.querySelector("#status").textContent = "Too Low"
            }else{
                document.querySelector("#game").textContent = "Congratulation"
                document.querySelector("#status").textContent = ""
            }
            text+=" "+gettext
            document.querySelector("#previous").textContent = text
            document.querySelector("input[name=guess]").value = ""
            document.querySelector("button[name=refresh]").style.visibility="visible"
    }
}


function ref(){
        document.querySelector("input[name=guess]").value = ""
        number = Math.floor(Math.random()*100)+1
        text = "previous guess : "
        previous = document.querySelector("#previous").textContent = text
        document.querySelector("#status").textContent = ""
        document.querySelector("#game").textContent = ""
        document.querySelector("button[name=confirm]").disabled = false
        document.querySelector("input[name=guess]").disabled = false
        
        document.querySelector("form[name=form-horizontal]").style.visibility = "hidden"
        document.querySelector("form[name=form-horizontal]").style.visibility = "hidden"
        document.querySelector("#previous").style.visibility = "hidden"
        document.querySelector("#timer").style.visibility = "hidden"
        document.querySelector("#game").style.visibility = "hidden"
    }

