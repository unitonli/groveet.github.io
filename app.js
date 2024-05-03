console.log('Lexa hello')

const cookies = document.querySelector('.clickHere');
const textTotalCoin = document.querySelector('.textTotalCoin');
var totalCoin = 0

cookies.addEventListener("click", (event) => {
    cookies.classList.add("whileClick");
    console.log('click');
    totalCoin +=1;
    console.log(totalCoin);
    textTotalCoin.innerHTML = totalCoin;
    
    setTimeout(() => cookies.classList.remove("whileClick"), 100);
});
