//synchronous
// console.log(" I ")
// console.log(" eat")
// setTimeout(()=>{
//     console.log(" Ice cream")
// }, 3000)

// console.log(" with")
// console.log(" a")
// console.log(" spoon")


// asynchronous


// function dowfg(d,c){
//     let dowfg = (a,b)=>{

//     }
// }


// function one(call_two){
//     call_two()
//     console.log('step 1 complete.please call step 2')

    
// }

// function two(){
// console.log('Step 2')
// }

// one(two)

let stock = {
    Fruits: ["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
}
let order  = (Fruit_name, call_production)=>{

    setTimeout(()=>{
        console.log(`${stock.Fruits[Fruit_name]} was selected`);
        call_production()
    },2000)
   
    
}


let production = ()=>{
    setTimeout(()=>{
        console.log("Production has started");

setTimeout(()=>{
    console.log("The fruit has been chopped")


setTimeout(()=>{
    console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`)

    setTimeout(()=>{
        console.log("the machine started")
        setTimeout(()=>{
            console.log(`${stock.holder[0]} was chosen`)

            setTimeout(()=>{
                console.log(`${stock.toppings[1]} is the best for you`)
                setTimeout(()=>{
                    console.log("Enjoy!!!")
                },2000)
            },3000)
        },2000)
    },1000)

},1000)

},2000)

    },0000)
    
}
order(0,production)

//console.log(stock.Fruits[2])