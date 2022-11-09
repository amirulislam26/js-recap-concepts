const bank = owner => {
    balence = 0;
    return amount => {
        balence = balence + amount;
        balence += amount;
        return balence;
    }
}
///////////////////////////////////////
const banks = owner => {
    balence = 0;
    return {
        deposit: amount => {
            // balence = balence + amount;
            balence += amount;
            return balence;
        },
        withdrow: amount => {
            balence = balence - amount;
            balence -= amount;
            return balence;
        }
    }
    
};
const MofijBank = banks('MofijVai');
console.log(MofijBank.deposit(100));
console.log(MofijBank.deposit(200));
console.log(MofijBank.balence);
console.log(MofijBank.deposit(400));
console.log(MofijBank.withdrow(100));
console.log(MofijBank.withdrow(150));
console.log(MofijBank.withdrow(200));