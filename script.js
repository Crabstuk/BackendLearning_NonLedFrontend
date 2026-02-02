// get a present
const yesButton = document.querySelector("#yesButton");
const noButton = document.querySelector("#noButton");
const giftDisplayText = document.querySelector("#giftDisplayText");
const giftDisplay = document.querySelector("#giftDisplay");
const callDB = TypeOfPresentInt => {
    fetch(`http://localhost:3000/prezenty?WasTheUserGood=${TypeOfPresentInt}`).then( (res) => {
    return res.json();
   }).then(data => {
        giftDisplayText.textContent =  data[0].NameOfGift
        giftDisplay.src =  data[0].SourceOfGift
        
    })
}
// upload

const giftUpload = document.querySelector("#giftUpload");

const nameOfGiftInput = document.querySelector("#nameOfGiftInput");
const sourceOfGiftInput = document.querySelector("#sourceOfGiftInput");
const IsItAGoodGiftCheckbox = document.querySelector("#IsItAGoodGiftCheckbox");
const sendGiftToDBButton = document.querySelector("#sendGiftToDBButton");
giftUpload.addEventListener("keydown",event =>{
    setTimeout(() => {
        console.log(event + "launched")
        if(nameOfGiftInput.value && sourceOfGiftInput.value && sourceOfGiftInput.value.includes("https")){
            console.log(IsItAGoodGiftCheckbox.value)
            sendGiftToDBButton.disabled = false;
        }else{
            sendGiftToDBButton.disabled = true
        }
    },1)
});




const UploadGiftToDB = () => {
    console.log("works ")
    fetch("http://localhost:3000/prezenty",{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:{
            NameOfGift:nameOfGiftInput.value,
            sourceOfGift:sourceOfGiftInput.value,
            IsItAGoodGift:IsItAGoodGiftCheckbox.checked? 1:0
        }
    }).then(() =>{
        
    })
}