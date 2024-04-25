 const findTheOldest = function(people) {
    let a = people.map(person => findAge(person))
    return a.sort(compare)[0]
};

const findAge = function(person){
    
    let yod = person.yearOfDeath
    
    if (yod === undefined) {
        yod = new Date().getFullYear()
    }
    person["age"] = yod - person.yearOfBirth
    return person
}

function compare(a,b) {
  if (a.age > b.age) return -1
  if (a.age == b.age) return 0
  if (a.age < b.age) return 1
}

// Do not edit below this line
module.exports = findTheOldest;
