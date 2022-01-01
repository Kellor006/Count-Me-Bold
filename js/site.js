//get the values from the UI
//start or controller function 
function getValues()
{
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    //Need to validate our input. 
    //parse into INT
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);



    if(Number.isInteger(startValue) && Number.isInteger(endValue))
    {
        //we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //we call displayNumbers
        displayNumbers(numbers);
    }
    else
    {
        alert("You must enter numbers");
    }
}

//generate numbers from startValue to the endValue
//logic function(s)
function generateNumbers(sValue, eValue)
{
    let numbers = [];

    //we want to get all numbers from start to end
    for(let index = sValue; index <= eValue; index++)
    {
        //this will excute in a loop until index = eValue.
        numbers.push(index);
    }
    return numbers;
}

//display the numbers and mark the even numbers bold
//display / view fuctions
function displayNumbers(numbers)
{
    let templateRows="";

    for (let index = 0; index < numbers.length; index++) 
    {
        let className="even";
        let number = numbers[index];
        if(number % 2 == 0)
        {
            className="even";
        }
        else
        {
            className="odd";
        }
        
        
        templateRows +=`<tr><td class="${className}">${number}</td></tr>`;
    }
    
    document.getElementById("results").innerHTML = templateRows;
}