const devDebugger = {
    expect: function(value){
        return{
            willBe: expV =>{
                if (value === expV){
                    console.log(`Test №${this.testNum}\nResult: True`)
                } else {
                    console.error(`Test №${this.testNum}\nResult: False\nValue is ${value} (type: ${typeof(value)}), but expectation is ${expV} (type: ${typeof(expV)})`)
                }
                this.testNum++
            }
        }
    },
    testNum: 0,
}



