const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json";

const dropdowns=document.querySelectorAll('.dropdown select');
const btn=document.querySelector('button');
const fromCurr=document.querySelector('.from select');
const toCurr=document.querySelector('.to select');

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement('option');
        newOption.innerText=currCode;
        newOption.value=currCode;
        // this is the decideing part of what should be the initial value //
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";
        }else if (select.name==="to" && currCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);  
    }
    select.addEventListener('change',(evt)=>{
        updateFlag(evt.target);// this is the event object
    });
}
const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let image = element.parentElement.querySelector(' img');
    image.src=newSrc;
    }

btn.addEventListener('click',async(evt)=>{
    evt.preventDefault();   
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal===""|| amtVal<0){
        amtVal=1;
        amount.value="1";
    }
    
    // console.log(fromCurr.value, toCurr.value);
    const URL =`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response=await fetch(URL);
    let data=await response.json();     
    let rate=data[toCurr.value.toLowerCase()];
    let finalAmount=amtVal*rate;
    msg.innerText=`${amtVal}${fromCurr.value} = ${rate}${toCurr.value}`;
});


 




















































