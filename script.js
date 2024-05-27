const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = upperSet.toLowerCase();
const numberSet = "0123456789";
const specialSet = "~!@#$%^&*()_";

// selectors
const passBox = document.querySelector("#pass-box")
const totalchar = document.querySelector("#total-char")
const upperInput = document.querySelector("#upper-case")
const lowerInput = document.querySelector("#lower-case")
const numberInput = document.querySelector("#numbers")
const specialInput = document.querySelector("#symbols")

const getRandomData = (dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}
// The Math.floor() method rounds a number DOWN to the nearest integer. Eg. a = 1.9      a.Math.floor() => 1
// The Math.abs() method returns the absolute value of a number. Eg. a = -2.5            a.Math.abs() => 2.5

const genratePassword = (password = "")=>{
      if (upperInput.checked){
        password = password+getRandomData(upperSet)
      }

      if (lowerInput.checked){
        password = password+getRandomData(lowerSet)
      }
      if (numberInput.checked){
        password = password+getRandomData(numberSet)
      }
      
      if (specialInput.checked){
        password = password+getRandomData(specialSet)
      }
      if (password.length <= totalchar.value){
        return genratePassword(password)
      }
    //   console.log(password);
    passBox.innerText = truncateString(password, totalchar.value);
}

document.querySelector("#btn").addEventListener(
    "click",
    function(){
         genratePassword();
    }
)

function truncateString(str , num){
    if(str.length>num){
        let subStr = str.substring(0, num);
        return subStr;

    }
    else{
        return str
    }
}
