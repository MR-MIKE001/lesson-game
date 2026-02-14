 const input=document.getElementById("input");
        const btn=document.getElementById("btn");
        const winOrLoose=document.getElementById("winorloose");
        const userChoice=document.getElementById("users-choice");
        const computerChoice=document.getElementById("computer-choice");

        //get number fromthe user
        //compare against the computer choice 
        //spill out the number of the users choice and thecomputer choice 
        //determina ife the user win or not
        //give the user a chance to try 3 times again if they loose 
        
        function getComputerChoice(){
            return Math.ceil(Math.random()*10-1)

        }

        function getUserChoice(){ 
            return input.value
        }

        function compareUsersComputer(){
            let user=parseInt(getUserChoice())
            let computer=getComputerChoice();
            input.value="";
            if(isNaN(user)){
                alert("please enter a valid number")
                return
            }
            if(user<1){
                alert("input most not be less than 1")
                return
            }
             if(user>10){
                alert("input most not be greater than 10")
                return
            }
            if(user==computer){
                winOrLoose.textContent="You win"
                userChoice.textContent=`The number you choose is: ${user}`
                computerChoice.textContent=`The number the compuiter choose is: ${computer}`
                return
            }else{
                 winOrLoose.textContent="You loose"
                userChoice.textContent=`The number you choose is: ${user}`
                computerChoice.textContent=`The number the compuiter choose is: ${computer}`
                return
            }
        }
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    compareUsersComputer();
})