let copycount = 0 ;
let lovecount = 0 ;


const navcopybtn = document.getElementById('copybutton');
const copybtn = document.querySelectorAll('.copyBtn');

const navicon = document.getElementById('life');
const loveicon = document.querySelectorAll('.love-icon');


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



   



