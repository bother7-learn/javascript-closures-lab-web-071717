
function bumpCounter(){
  var counter = 0;
  function addBump() {counter ++};
  function getBumps() {return counter};
  return {addBump, getBumps};
}

function createAnimal(animalType){
    // function animalType() {return `animalType: ${animal}`}
    return function (deadlyDevice)
    {return {animalType, deadlyDevice}}
}

const sharkCreator = createAnimal("Shark")
const sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
const sharkWithFrickinCannon = sharkCreator('Cannon')
