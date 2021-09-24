const dateOfBirth = document.querySelector("#birthday");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");



function compareNumber(sum,luc) {
    if(sum % luc === 0)   {
        output.innerText = "Your birthday is lucky 🎊";
    } else {
        output.innerText = "Your birthday is not lucky , don't be sad here's a gift for you 🎁";
    }
}
function checkLuckyNumber() {
    const dob = dateOfBirth.value;
    const luc = luckyNumber.value;
    const sum = calculateSum(dob);
    if(luc&&dob && luc > 0)  {
        compareNumber(sum,luc);
    } else if(luc < 0){
        output.innerText = "Invalid input. Number should be positive!!";
    } else{
        output.innerText = "Please enter both the values";
    }
    

}

function calculateSum(dob) {
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i = 0 ; i < dob.length;i++) {
        sum += Number(dob.charAt(i));
    }
    return sum;
}
alert("This is just for fun! We do not store any data.")
checkButton.addEventListener("click", checkLuckyNumber);