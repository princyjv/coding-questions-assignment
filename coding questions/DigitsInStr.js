
    //How do you check if a string contains only digits?
    console.log("check if a string contains only digits")

    const digits_only = string => [...string].every(c => '0123456789'.includes(c));

    console.log(digits_only('123')); // true
     console.log(digits_only('+123')); // false

     console.log("---------------------------------------------")