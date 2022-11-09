function patriChai(age, earning){
    // console.log(trueAge);
    var decision = canMarry(15000);
    console.log(decision);
    console.log(age);
    console.log(earning);

    const trueAge = age + 7;
    function canMarry(expense){
        const remainding = earning - expense;
        if (remainding > 1000){
            const showing = 500;
            console.log(showing);
            return true;
        }
        return false;
    };

};
const live = patriChai(21, 50000);
console.log(live);