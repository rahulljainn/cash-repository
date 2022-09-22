const billAmount=document.querySelector("#billamt");
const cashGiven=document.querySelector("#givencash");
const checkButton=document.querySelector("#buttoncheck");
const message=document.querySelector("#errormessage");
const noOfnotes=document.querySelectorAll(".no-of-notes");

const availableNotes=[2000, 500, 100, 50, 20, 10, 5, 1 ];

 checkButton.addEventListener("click" ,function validateBillandCashAmount(){
    hidemessage();
    const amount=Number(billAmount.value);
    const cash=Number(cashGiven.value);
        if(amount > 0){
            if (cash > amount){
                const amountToBereturned=cash-amount;
                calculatechange(amountToBereturned);
            }else if(cash==amount){
                popMessage("no need to return change")
            }
            else {
                popMessage("the amount you paid is less please recheck it");
                }
            }else{
                popMessage("invalid amount")
            }
    });
    function calculatechange(amountToBereturned) {
        for (let i=0; i< availableNotes.length; i++) {
            const numberOfNotes= Math.trunc(amountToBereturned / availableNotes[i]);
            amountToBereturned = amountToBereturned % availableNotes[i];
            noOfnotes[i].innerText=numberOfNotes;
        }
    }
    function hidemessage(){
        message.style.display="none";
    }
    function popMessage(msg){
        message.style.display="block";
        message.innerText=msg;
    }
