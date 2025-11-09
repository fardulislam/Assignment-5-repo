let copycount = 0 ;
let lovecount = 0 ;


const navcopybtn = document.getElementById('copybutton');
const copybtn = document.querySelectorAll('.copyBtn');

const navicon = document.getElementById('life');
const loveicon = document.querySelectorAll('.love-icon');

const clearbtn = document.getElementById('clearbtn');
const callbtn = document.getElementsByClassName('callbtn');

 const cardcontainer = document.getElementById('card-container')

 const navcoin =document.getElementById('coin');
let coin =100;

     copybtn.forEach((btn) => {
        btn.addEventListener("click", () => {
          copycount++;
          navcopybtn.textContent = `${copycount}`;
        });
      });
loveicon.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    lovecount++;
    navicon.textContent = `${lovecount}`;
  })
})



for(let callbutton of callbtn){
  callbutton.addEventListener('click',function(){
    // product title //
    const cardtitle = callbutton.parentNode.parentNode.children[1].innerText;
    console.log(cardtitle)

    // product title paragraph //
    const cardparagraph =callbutton.parentNode.parentNode.children[3].innerText;
    console.log(cardparagraph);

    // navber coin btn //
      
    
    console.log(navcoin)
    if(coin>20){
      coin-=20;
      navcoin.textContent=coin;
    }
    else{
      coin=0;
      navcoin.textContent=coin;
      alert('you have not enaf coin')
      return;
    }

     const now = new Date();
    const timeString = now.toLocaleTimeString();

   
    const newcard = document.createElement('div')
    newcard.innerHTML=`
    <div class="p-2 flex justify-between items-center rounded-sm bg-gray-100 ">
              <div>
                <h1 class="text-sm font-bold">${cardtitle}</h1>
              <h3 class='text-sm'>${cardparagraph} </h3>
              </div>
              <div>
                <h3 class='text-sm'>${timeString}</h3>
              </div>
            </div>
    `
    cardcontainer.append(newcard)
  })
}

clearbtn.addEventListener('click',function(){
  cardcontainer.innerHTML='';
  coin=100;
  navcoin.textContent=coin;
})






   



