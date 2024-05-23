

// step 1: selected the required element

// input, submit button, output section 

// when a value is entered inside a input 

// identify when submit button is clicked


const input_box = document.getElementById("bill")
const submit_button = document.querySelector("button")

// const output = document.querySelector(".output")

const output = document.getElementsByClassName("output")[0]


// events and addEventListener


// it understood that I am doing a specific event and based on that it did some functions.


//elemet => hey add addevent lister if hover is happending show a dialog box

submit_button.addEventListener("click", calculateTip)


function calculateTip(){
    // console.log("clicked")
    let bill_amount = input_box.value
    if(bill_amount === ""){
        alert("Please enter a value")
        return
    }
    // console.log(bill_amount)
    let tip = bill_amount*2/100 
    // console.log(tip)
    output.innerText = `Tip is ${tip}`
}