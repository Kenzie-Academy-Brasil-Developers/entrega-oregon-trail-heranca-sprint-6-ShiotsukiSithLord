class Traveler{
    constructor(name,food,health){
        this._name = name;
        this._food = 1;
        this._health = true;
      
    }
    hunt(){

        return this._food += 2

    }

    eat(){
        this._food -= 1
        if(this._food < 0){
           this._food = 0
           this._health = false
        }
        
        return 
    }

}
class Doctor extends Traveler{
    constructor(name, type){
        super(name)
        this.type = Doctor

    }
    heal(x){
      x._health = true
    }
}

class Hunter extends Traveler{
    constructor(name,type){
        super(name)
        this.type = Hunter
        this._food = 2
      
    }

    giveFood(name,foodNum){
        this._food -= foodNum
        name._food += foodNum
    }
    hunt(){
       
        return  this._food += 5
    }
    eat(){
        this._food -= 2
        if(this._food < 0){
             this._food = 0
        }
        this._health = (this._food <= 1) ? false : true;
       
    }
    
}

class Wagon {
    constructor(limit){
  this._limit = limit;
  this._passangers = [];
    }
   
    join(x){
    
 
     if(this._passangers.length < this._limit){ 
      this._passangers.push(x)
     }
    
    }

    get passangerstats(){
        
        return this._passangers[0];
    }

    set passangerstats(val){
       this._val = val
        
        
      }
   

   getAvailableSeatCount(){
       return this._limit - this._passangers.length
   }
   shouldQuarantine(x){
      x = (this._passangers[0]._health === true && this._passangers[1]._health === true && this._passangers[2]._health === true && this._passangers[3]._health === true) ? false : true;
    
       return x
   }
   totalFood(){
       let foodcount = 0;
      for(let foods in this._passangers){ 
         foodcount += this._passangers[foods]._food
      }
       return foodcount
   }
 
}



// Cria uma carroça que comporta 4 pessoas
let wagon = new Wagon(4);
// Cria cinco viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
 
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
 
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
 
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
 
wagon.join(maude); // Não tem espaço para ela!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
 
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
 
sarahunter.hunt(); // pega mais 5 comidas
drsmith.hunt();
 
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
 
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan agora está doente (sick)
 
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
 
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
 
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // Ela só tem um, então ela come e fica doente
 
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);

