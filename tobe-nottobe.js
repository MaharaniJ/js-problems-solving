var createCounter = function(init) {
    let counter = init;
    return {
        increment(){
            counter++;
            return counter;
        },
        decrement(){
            counter--;
            return counter
        },
        reset(){
            counter = init;
            return counter;
        }
    }
};

const counter1 = createCounter(5);
const counterNeg2 = createCounter(-2);

console.log(counter1.increment())
console.log(counter1.reset())
console.log(counter1.decrement())

console.log(counterNeg2.increment())
console.log(counterNeg2.increment())
console.log(counterNeg2.decrement())
console.log(counterNeg2.reset())
console.log(counterNeg2.reset())