let score : number | string

// this both works no error this is union

// score = "he"
// score = 43

getDBId(3);
getDBId("mukesh")

function getDBId (id: string | number){
    // id.toLowerCase() // this gives an error

    if(typeof id === "string"){
        id.toLowerCase();
    }
}