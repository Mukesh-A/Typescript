// function addTwo(num){
//     return num+2
// }

// addTwo("m")

// above example was right but the best practice is to pass type, i u pass strinf it will happily take it doesnot through error

function addTwo(num:number){
    return num+2
}
// in th eabove code wat if the user return the string so we can code this way

function adding (num:number): number{
    return num+2 
}




adding(3)
addTwo(2)

//array
const hero = ["m", "u","k"]

hero.map((heros):string =>{
    return `hero is ${heros}`
})

export {}