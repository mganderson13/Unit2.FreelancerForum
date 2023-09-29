const initialFreelancers = [
    {name: "Dr. Slice", price: 25, occupation: "Gardener"},
    {name: "Dr. Pressure", price: 51, occupation: "Programmer"},
    {name: "Prof. Possibility", price: 43, occupation: "Teacher"},
    {name: "Prof. Prism", price: 81, occupation: "Teacher"},
];
const addedFreelancers = [
{ name: "Dr. Impulse", price: 43, occupation: "teacher" },
{ name: "Prof. Spark", price: 76, occupation: "programmer" },
{ name: "Dr. Wire", price: 47, occupation: "teacher" },
{ name: "Prof. Goose", price: 72, occupation: "driver" },
];

const initialFrees = document.querySelector("#initial");

initialFreelancers.forEach(item => {
    const itemElement = document.createElement("li"); 
    itemElement.textContent= `Freelancer: ${item.name}  Price: $${item.price}  Occupation: ${item.occupation}`; 
    initialFrees.append(itemElement);
});
//calculate average of initial freelancers
const sum = initialFreelancers.reduce((acc, item) => acc + item.price, 0);
const mean = sum / initialFreelancers.length;
console.log(mean);
//display average to user
const averageMessage = document.querySelector("#message");
const average1 = document.createElement("p");
average1.textContent= `The average cost of available freelancers is $${mean}.`;
averageMessage.append(average1);

// add price of each new freelancer to the average and update the average message
// change the average to a loop 
/*
let newSum = mean;
for (let i = 0; i < addedFreelancers.length; i++) {
  const average = addedFreelancers.price[i];
  Return sum += ;
}
//other attempt
let elem = 0
function addAverage () {
    if (elem < addedFreelancers.length) {
        const price = addedFreelancers[elem]
       const newAverage = mean + 
};
}*/
//const updateAverage = setInterval(addAverage, 1000)

//display other freelancers one at a time
let index=0;
function toBeAdded () {
 if (index < addedFreelancers.length) {
    const item =addedFreelancers[index];
    const addedElement = document.createElement("li"); 
    addedElement.textContent= `Freelancer: ${item.name}  Price: $${item.price}  Occupation: ${item.occupation}`; 
    initialFrees.append(addedElement);
    index++;
}else {
    clearInterval(addInterval);
};
}

const addInterval = setInterval(toBeAdded, 3000);

// need random freelancers to be generated 
function random () {
    const randPerson = addedFreelancers[Math.floor(Math.random()*addedFreelancers.length)];
    addedFreelancers.push(randPerson);
}

