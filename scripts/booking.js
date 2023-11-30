/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dayTotal = 0;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

document.getElementById("monday").onclick = function mondayChange()
{
    if ( document.getElementById("monday").classList.contains('clicked') )
    {
        document.getElementById("monday").classList.remove('clicked');
        dayTotal -= 1;
    }
    else
    {
        document.getElementById("monday").classList.add('clicked');
        dayTotal += 1;
    }
    if ( document.getElementById("full").classList.contains('clicked') )
    {
        document.getElementById('calculated-cost').textContent = dayTotal * 35;
    }
    else{
        document.getElementById('calculated-cost').textContent = dayTotal * 20;
    }
};

document.getElementById("tuesday").onclick = function tuesdayChange()
{
    if ( document.getElementById("tuesday").classList.contains('clicked') )
    {
        document.getElementById("tuesday").classList.remove('clicked');
        dayTotal -= 1;
    }
    else
    {
        document.getElementById("tuesday").classList.add('clicked');
        dayTotal += 1;
    }
    if ( document.getElementById("full").classList.contains('clicked') )
    {
        document.getElementById('calculated-cost').textContent = dayTotal * 35;
    }
    else{
        document.getElementById('calculated-cost').textContent = dayTotal * 20;
    }
};

document.getElementById("wednesday").onclick = function wednesdayChange()
{
    if ( document.getElementById("wednesday").classList.contains('clicked') )
    {
        document.getElementById("wednesday").classList.remove('clicked');
        dayTotal -= 1;
    }
    else
    {
        document.getElementById("wednesday").classList.add('clicked');
        dayTotal += 1;
    }
    if ( document.getElementById("full").classList.contains('clicked') )
    {
        document.getElementById('calculated-cost').textContent = dayTotal * 35;
    }
    else{
        document.getElementById('calculated-cost').textContent = dayTotal * 20;
    }
};

document.getElementById("thursday").onclick = function thursdayChange()
{
    if ( document.getElementById("thursday").classList.contains('clicked') )
    {
        document.getElementById("thursday").classList.remove('clicked');
        dayTotal -= 1;
    }
    else
    {
        document.getElementById("thursday").classList.add('clicked');
        dayTotal += 1;
    }
    if ( document.getElementById("full").classList.contains('clicked') )
    {
        document.getElementById('calculated-cost').textContent = dayTotal * 35;
    }
    else{
        document.getElementById('calculated-cost').textContent = dayTotal * 20;
    }
};

document.getElementById("friday").onclick = function fridayChange()
{
    if ( document.getElementById("friday").classList.contains('clicked') )
    {
        document.getElementById("friday").classList.remove('clicked');
        dayTotal -= 1;
    }
    else
    {
        document.getElementById("friday").classList.add('clicked');
        dayTotal += 1;
    }
    if ( document.getElementById("full").classList.contains('clicked') )
    {
        document.getElementById('calculated-cost').textContent = dayTotal * 35;
    }
    else{
        document.getElementById('calculated-cost').textContent = dayTotal * 20;
    }
};

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
document.getElementById("clear-button").onclick = function clearButton()
{
    document.getElementById("monday").classList.remove('clicked');
    document.getElementById("tuesday").classList.remove('clicked');
    document.getElementById("wednesday").classList.remove('clicked');
    document.getElementById("thursday").classList.remove('clicked');
    document.getElementById("friday").classList.remove('clicked');
    dayTotal = 0;
    document.getElementById('calculated-cost').textContent = 0;
};

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
document.getElementById("half").onclick = function halfButton()
{
    if ( document.getElementById("half").classList.contains('clicked') )
    {
        document.getElementById("half").classList.remove('clicked');
        document.getElementById("full").classList.add('clicked');
    }
    else
    {
        document.getElementById("half").classList.add('clicked');
        document.getElementById("full").classList.remove('clicked');
    }
    if ( document.getElementById("full").classList.contains('clicked') )
    {
        document.getElementById('calculated-cost').textContent = dayTotal * 35;
    }
    else{
        document.getElementById('calculated-cost').textContent = dayTotal * 20;
    }
};

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
document.getElementById("full").onclick = function fullButton()
{
    if ( document.getElementById("full").classList.contains('clicked') )
    {
        document.getElementById("full").classList.remove('clicked');
        document.getElementById("half").classList.add('clicked');
    }
    else
    {
        document.getElementById("full").classList.add('clicked');
        document.getElementById("half").classList.remove('clicked');
    }
    if ( document.getElementById("full").classList.contains('clicked') )
    {
        document.getElementById('calculated-cost').textContent = dayTotal * 35;
    }
    else{
        document.getElementById('calculated-cost').textContent = dayTotal * 20;
    }
};

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

window.onload = function calculate()
{
let costLabel = document.getElementById("calculated-cost").textContent;
    console.log(costLabel);
    if ( document.getElementById("full").classList.contains('clicked') )
    {
        document.getElementById('calculated-cost').textContent = dayTotal * 35;
    }
    else{
        document.getElementById('calculated-cost').textContent = dayTotal * 20;
    }
};
/*Taylor Crowe CPRG-213F 000612584 Nov 29 2023*/