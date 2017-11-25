class TestClass {
  public mapTest() {
    const map_obj = {
      x: 5,
      y: 3
    };
    
    //let containsX = "x" in mapObj;
    map_obj["z"] = 9;
    delete map_obj["x"];
    
    const keys_var = Object.keys(map_obj);
    const values_var = Object.values(map_obj);
    return map_obj["z"];
  }
  
  public explicitTypeTest() {
    const op = "";
    console.log(op.length);
  }
  
  public ifTest(x: number) {
    let result = "<unk>";
    
    if (x > 3) {
        result = "hello";
    } else if (x < 1) {
        result = "bello";
    } else if (x < 0) {
        result = "bello2";
    }   else {
    result = "???";
      }
    
    if (x > 3) {
        result = "z";
    }
    
    if (x > 3) {
        result = "x";
    }   else {
    result = "y";
      }
    
    return result;
  }
  
  public arrayTest() {
    //const c2 = new Class2();
    
    const mutable_arr = [1, 2];
    mutable_arr.push(3);
    mutable_arr.push(4);
    // mutableArr.push(c2.property);
    // mutableArr.push(c2.child.property);
    // mutableArr.push(c2.child.child.property);
    
    const constant_arr = [5, 6];
    
    // some comment
    //   some comment line 2
    for (const item of mutable_arr) {
        console.log(item);
    }
    
    /* some other comment
       multiline and stuff
    */
    for (let i = 0; i < constant_arr.length; i++) {
        console.log(constant_arr[i]);
    }
  }
  
  public calc() {
    return (1 + 2) * 3;
  }
  
  public methodWithArgs(arg1: number, arg2: number, arg3: number) {
    const stuff = arg1 + arg2 + arg3 * this.calc();
    return stuff;
  }
  
  public stringTest() {
    const x = "x";
    const y = "y";
    
    let z = "z";
    z += "Z";
    z += x;
    
    return z + "|" + x + y;
  }
  
  public reverseString(str: string) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
  }
  
  public getBoolResult(value: bool) {
    return value;
  }
  
  public testMethod() {
    this.arrayTest();
    console.log(this.mapTest());
    console.log(this.stringTest());
    console.log(this.reverseString("print value"));
    console.log(this.getBoolResult(true) ? "true" : "false");
  }
}

new TestClass().testMethod();