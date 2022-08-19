const billAmount=document.querySelector("#billamt");
const cashGviven=document.querySelector("#givencash");
const checkButton=document.querySelector("#buttoncheck");
const message=document.querySelector("#errormessage");
const noOfnotes=document.querySelectorAll(".no-of-notes");

const availableNotes=[2000, 500, 100, 50, 10, 1 ];

 checkButton.addEventListener("click" ,function validateBillandCashAmount(){
     hidemessage();
    if(billAmount.value > 0){
        if (cashGviven.value>=billAmount.value){
            const amountToBereturned=cashGviven.value-billAmount.value;
            calculatechange(amountToBereturned);
        }else{
            popMessage("the amount you paid is less please recheck it");
        }
        }else{ 
            popMessage("The  Bill amount is not valid");

        }
    });
    function calculatechange(amountToBereturned) {
        for (let i=0; i< availableNotes.length; i++) {
            const numberOfNotes= Math.trunc(amountToBereturned / availableNotes[i]);
            amountToBereturned %= availableNotes[i];
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
   


