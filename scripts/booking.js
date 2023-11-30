/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dayTotal = 0;
const HALF_RATE = 20;
const FULL_RATE = 35;
const MONDAY = document.getElementById("monday");
const TUESDAY = document.getElementById("tuesday");
const WEDNESDAY = document.getElementById("wednesday");
const THURSDAY = document.getElementById("thursday");
const FRIDAY = document.getElementById("friday");
const FULL = document.getElementById("full");
const HALF = document.getElementById("half");
const CALC_COST = document.getElementById('calculated-cost');
const CLEAR = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

MONDAY.onclick = function mondayChange()
{
    if ( MONDAY.classList.contains('clicked') )
    {
        MONDAY.classList.remove('clicked');
        dayTotal -= 1;
    }
    else
    {
        MONDAY.classList.add('clicked');
        dayTotal += 1;
    }
    if ( FULL.classList.contains('clicked') )
    {
        CALC_COST.textContent = dayTotal * FULL_RATE;
    }
    else{
        CALC_COST.textContent = dayTotal * HALF_RATE;
    }
};

TUESDAY.onclick = function tuesdayChange()
{
    if ( TUESDAY.classList.contains('clicked') )
    {
        TUESDAY.classList.remove('clicked');
        dayTotal -= 1;
    }
    else
    {
        TUESDAY.classList.add('clicked');
        dayTotal += 1;
    }
    if ( FULL.classList.contains('clicked') )
    {
        CALC_COST.textContent = dayTotal * FULL_RATE;
    }
    else{
        CALC_COST.textContent = dayTotal * HALF_RATE;
    }
};

WEDNESDAY.onclick = function wednesdayChange()
{
    if ( WEDNESDAY.classList.contains('clicked') )
    {
        WEDNESDAY.classList.remove('clicked');
        dayTotal -= 1;
    }
    else
    {
        WEDNESDAY.classList.add('clicked');
        dayTotal += 1;
    }
    if ( FULL.classList.contains('clicked') )
    {
        CALC_COST.textContent = dayTotal * FULL_RATE;
    }
    else{
        CALC_COST.textContent = dayTotal * HALF_RATE;
    }
};

THURSDAY.onclick = function thursdayChange()
{
    if ( THURSDAY.classList.contains('clicked') )
    {
        THURSDAY.classList.remove('clicked');
        dayTotal -= 1;
    }
    else
    {
        THURSDAY.classList.add('clicked');
        dayTotal += 1;
    }
    if ( FULL.classList.contains('clicked') )
    {
        CALC_COST.textContent = dayTotal * FULL_RATE;
    }
    else{
        CALC_COST.textContent = dayTotal * HALF_RATE;
    }
};

FRIDAY.onclick = function fridayChange()
{
    if ( FRIDAY.classList.contains('clicked') )
    {
        FRIDAY.classList.remove('clicked');
        dayTotal -= 1;
    }
    else
    {
        FRIDAY.classList.add('clicked');
        dayTotal += 1;
    }
    if ( FULL.classList.contains('clicked') )
    {
        CALC_COST.textContent = dayTotal * FULL_RATE;
    }
    else{
        CALC_COST.textContent = dayTotal * HALF_RATE;
    }
};

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
CLEAR.onclick = function clearButton()
{
    MONDAY.classList.remove('clicked');
    TUESDAY.classList.remove('clicked');
    WEDNESDAY.classList.remove('clicked');
    THURSDAY.classList.remove('clicked');
    FRIDAY.classList.remove('clicked');
    dayTotal = 0;
    CALC_COST.textContent = 0;
};

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
HALF.onclick = function halfButton()
{
    if ( HALF.classList.contains('clicked') )
    {
        HALF.classList.remove('clicked');
        FULL.classList.add('clicked');
    }
    else
    {
        HALF.classList.add('clicked');
        FULL.classList.remove('clicked');
    }
    if ( FULL.classList.contains('clicked') )
    {
        CALC_COST.textContent = dayTotal * FULL_RATE;
    }
    else{
        CALC_COST.textContent = dayTotal * HALF_RATE;
    }
};

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
FULL.onclick = function fullButton()
{
    if ( FULL.classList.contains('clicked') )
    {
        FULL.classList.remove('clicked');
        HALF.classList.add('clicked');
    }
    else
    {
        FULL.classList.add('clicked');
        HALF.classList.remove('clicked');
    }
    if ( FULL.classList.contains('clicked') )
    {
        CALC_COST.textContent = dayTotal * FULL_RATE;
    }
    else{
        CALC_COST.textContent = dayTotal * HALF_RATE;
    }
};

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

window.onload = function calculate()
{
let costLabel = CALC_COST.textContent;
    console.log(costLabel);
    if ( FULL.classList.contains('clicked') )
    {
        CALC_COST.textContent = dayTotal * FULL_RATE;
    }
    else{
        CALC_COST.textContent = dayTotal * HALF_RATE;
    }
};
/*Taylor Crowe CPRG-213F 000612584 Nov 30 2023*/
