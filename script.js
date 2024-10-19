let pet = {
    name: "Chodri",
    type: "dog",
    age: 3,
    happiness: 50,
    hunger: 40,
    isAlive: true, //alive status
  
    feed: function () {
      if (!this.isAlive) {
        this.petIsDead();
        return;
      }
  
      this.hunger -= 20;
      if (this.hunger < 0) this.hunger = 0;
      document.getElementById("pet-hunger").textContent = this.hunger;
      document.getElementById(
        "action-alert"
      ).textContent = `${this.name} is less hungry! Hunger: ${this.hunger}`;
    },
  
    play: function () {
      if (!this.isAlive) {
        this.petIsDead();
        return;
      }
  
      this.happiness += 20;
      if (this.happiness > 100) this.happiness = 100;
      document.getElementById("pet-happiness").textContent = this.happiness;
      document.getElementById(
        "action-alert"
      ).textContent = `${this.name} is happier! Happiness: ${this.happiness}`;
    },
  
    agePet: function () {
      if (!this.isAlive) {
        this.petIsDead();
        return;
      }
  
      this.age += 1;
      this.happiness -= 5;
      if (this.happiness < 0) this.happiness = 0;
  
      this.hunger += 10;
      if (this.hunger > 100) this.hunger = 100; 
  
      document.getElementById("pet-age").textContent = this.age;
      document.getElementById("pet-happiness").textContent = this.happiness;
      document.getElementById("pet-hunger").textContent = this.hunger;
  
      //  dead status
      if (this.age > 7) {
        this.isAlive = false;
        this.petIsDead();
      } else {
        document.getElementById(
          "action-alert"
        ).textContent = `${this.name} grew older! Age: ${this.age}, Happiness: ${this.happiness}, Hunger: ${this.hunger}`;
      }
    },
  
    petIsDead: function () {
      document.getElementById(
        "action-alert"
      ).textContent = `Sadly, ${this.name} has passed away.`;
      document.getElementById("pet-status").textContent = "Status: Dead";
      document.querySelector(".controls").style.display = "none"; // Hide the control buttons
    },
  };
  