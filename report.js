let Savebutton = document.getElementById("sub")
let counts;
let inpt = document.getElementById("biggy")


Savebutton.addEventListener('click',(ev)=>{
    console.log('i reached here the eventlistener works')
    if (!localStorage.getItem("counts")){     
        localStorage.setItem("counts",0);
    }
    console.log(counts)
    class Issue{
        constructor(issue){
            this.issue = issue;
        }
    }
    let newReport = new Issue(inpt.value); 

   
    counts = Number( localStorage.getItem("counts"))
    localStorage.setItem(`new Issue${counts}`,JSON.stringify(newReport));
    counts++;
    localStorage.setItem("counts",counts)

    ev.preventDefault();
})       

