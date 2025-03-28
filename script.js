let friendshipStatus = document.querySelector("#status");
console.log(friendshipStatus);
let btn = document.querySelector("#btn");
console.log(btn);

let count = 0;
function freshStatus(){
    if(count == 0){
        friendshipStatus.textContent = "Request Sending...";
        friendshipStatus.style.color = "gold";
            setTimeout(function () {
                friendshipStatus.textContent = "Friends"
                friendshipStatus.style.color = "#10cd81"
                btn.textContent = "Remove Friend";
                count = 1;
                alert("Request Accept.");
                alert("Now You are Friends");
    }, 3000) 
    } else if (count == 1 || count != 0){
        friendshipStatus.textContent = "Stranger"
        friendshipStatus.style.color = "#f52121ef"
        btn.textContent = " Add Friend";
        count = 0;
        alert("You are Removing your Friend");
    }
}

btn.addEventListener("click", freshStatus);