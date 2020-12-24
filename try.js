const characters = [
    {name: "Ninja Ken", age: 14},
    {name: "Guru Domba", age: 100},
    {name: "Baby Ninja Ben", age: 5},
    {name: "Birdie"}
  ];
  
  // Selesaikan loop for dibawah
  for (let i = 0; i < characters.length; i++) {
    console.log("--------------------");
    
    // Tentukan nilai constant character
    const character = characters[i];
    
    // Print "Nama saya adalah ____"
    console.log(`Nama saya adalah ${character.name}`);
    if (character.age === undefined) {
      console.log("Umur saya rahasia");
    } else {
      console.log(`Saya berusia ${character.age} tahun`);
    }
       
  }