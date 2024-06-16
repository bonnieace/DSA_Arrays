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
        for (let i=1; i< this.length;i++){
            this.data[i-1]=this.data[i]

        }
        delete this.data[this.length-1]



        this.length--
        return first
    }
}

const newArray=new myArray()
newArray.push('cow')
newArray.push('horse')
newArray.push('goat')


 newArray.shift()
console.log(newArray)