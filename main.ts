import inquirer from "inquirer";
let mybalance = 10000;  // dollor
let mypin = 1234;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",

    }
]);
if(pinanswer.pin === mypin){
    console.log("correct pin code!!!");  


    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw" , "check balance"]
            }
        ]
    );
    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number",
                }
            ]
        );

        mybalance -= amountAns.amount;

        console.log("your remaining balance is " + mybalance); 
        
    } else if(operationAns.operation === "check balance"){
        console.log(`your remaining balance ${mybalance}`);
        
    }
    
    
}


else{
    console.log("incorrect pin code");
    
}