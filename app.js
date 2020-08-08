//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        
        if(styles.contains ('decrease')){
            count--;
            document.getElementById("value").style.color = "red";  
        }
        else if(styles.contains('increase')){
            count ++;
            document.getElementById("value").style.color = "green";  
        }
        else{
            count = 0;
            document.getElementById("value").style.color = "blue";  
        }
        value.textContent = count;

    });
})