function memoryExample() {
    let x = 5;                  // stack
    let y = {name: "JS"};       // heap (reference stored in stack)
    
    let z = y;                   // stack stores new reference
    z.name = "JavaScript";
    
    console.log(y.name);         // "JavaScript"
}

memoryExample();
