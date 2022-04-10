// variables
const adviceBtn = document.querySelector('.advice-btn');
const adviceNum = document.querySelector('.id-num');
const adivcePara = document.querySelector('.advice');
// to get the data when load the page
window.addEventListener('load', () => {
    getAdvice();
})
// to get the random advice onclick
adviceBtn.addEventListener('click', () => {

  getAdvice();  

})

// to fetch the data from API
async function getAdvice() {

    const url = 'https://api.adviceslip.com/advice';

    const response = await fetch(url);
    const data = await response.json();

    adviceNum.textContent = data.slip.id;
    adivcePara.textContent = data.slip.advice;

    console.log(data)
}