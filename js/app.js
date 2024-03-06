//TEST
//console.log('1-2-3 prova, prova, sa, sa.')

//1 Scrittura programma che stampi i numeri da 1 a 100.
let n = 100; //Number
for(let i = 0; i<n; i++){
    let number = i + 1;
    
    //2 Differenziazione dei valori in base al fatto che siano divisibile per tre, cinque o entrambi i numeri.
        //2.1 Calcolo del resto quando i valori vengono divisi per tre
        let rest3 = number % 3; //Number
        //console.log(rest3)

        //2.2 Calcolo del resto quando i valori vengono divisi per cinque
        let rest5 = number % 5; //Number
        //console.log(rest5)

        //2.3 Assegnazione valori in base alla divisibilità
        if(rest3 === 0 && rest5 === 0){
            number = ('BuzzFizz')
            console.log(number)

        } else if(rest3 === 0){
            number = ('Fizz')
            console.log(number)

        } else if(rest5 === 0){
            number = ('Buzz')
            console.log(number)

        } else {
            console.log(number)
        }
        

}

