const { idText } = require("typescript")

class myArray{
    constructor(){
        this.length=0,
        this.data={}
    }
    push(item){
        this.data[this.length]=item 

        this.length++

    }
    get(index){
        return this.data[index];

    }
    pop(){
        delete this.data[this.length-1]
        this.length--
        return this.data[this.length-1]


    }
    shift(){
        const first=this.data[0]
        delete this.data[0]


        this.length--
        return this.data
    }
}

const newArray=new myArray()
newArray.push('cow')
newArray.push('horse')
newArray.push('goat')


 newArray.shift()
console.log(newArray)