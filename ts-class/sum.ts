interface Car{
    engine: number;
    wheels: number;
    brand: string;
}

interface Audi{
    name: string;
    horsePower: number;
    basics: Car;
}

function details(car: Audi){

}

console.log(details({
    name:"Q7",
    horsePower: 12,
    basics:{
        engine: 2000,
        wheels:4,
        brand:"Audi"
    }
}));


//define a type 
interface Niggs{
    color: string;
    height: string;
    age: number
}

type Niggas = {
    name: string;
    height: string;
    age: number
}