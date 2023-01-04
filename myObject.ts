function createUser({name:string,isPaid:boolean}){

}
createUser({name:"mukesh", isPaid:false})

function createCourse():{name:string,price:boolean}{
    return {name:"m",price:true}
}

//Alias

type User = {
    name:string;
    age:number;
    isActive:boolean
}

function createUsers(user:User):User{
    return {name:"",age:2,isActive:true}
}


//readonly, optional

type Users = {
    readonly _id:string;
    age:number;
    email:string
}

let user :Users = {
    _id:"123",
    age:73,
    email:"string"
}

user._id = "" //gibing error


type Userss = {
    readonly _id:string;
    age:number;
    email?:string
}
