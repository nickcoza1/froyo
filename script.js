let stuff = prompt("froyo? (vanilla, chocolate, etc)");

let splitUp = stuff.split(","); 

for (let i = 0; i < splitUp.length; i++) {
  splitUp[i] = splitUp[i].trim(); 
}

let howMany = {}; 

for (let i = 0; i < splitUp.length; i++) {
  let a = splitUp[i];
  if (howMany[a]) {
    howMany[a] = howMany[a] + 1;
  } else {
    howMany[a] = 1;
  }
}

console.log("you got:");
for (let thing in howMany) {
  console.log(thing + " - " + howMany[thing]);
}
