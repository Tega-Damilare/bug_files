let setDisp = document.getElementById("set");
let getDisp = document.getElementById("get");


let programers = {
    set joiners(poeple){
        this.log.push(poeple)
    },
    log: []
};
programers.joiners = "tega"
programers.joiners = "Boss Mr.Dubem"
programers.joiners = "Mr.John(father of computers)"

console.log(programers.joiners);
setDisp.innerText = programers.log;

let group = {
    log : ["tega","Mr.Dudem","Mr.John"],
    get last(){
        return this.log[this.log.length - 1]
    },
};
console.log(group.last);
getDisp.innerText = group.last;