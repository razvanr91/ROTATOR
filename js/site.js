// get all values

let alertDiv = document.getElementById('alert');

let title = document.getElementById('title');

let message = document.getElementById('message');

function start() {
    // retrieve the input value, and using a regular expression
    // we trim out the white spaces and all the special characters
    let input = document.getElementById("phrase").value;
    let inputValue = input.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // make sure the title and message are empty
    title.textContent = "";

    message.textContent = "";

    // make sure the alert div is invisible
    alertDiv.classList.add('invisible');

    // check if any value was passed
    if (!inputValue) {
        title.textContent = "Something went wrong...";
        message.textContent = "You must enter a string in order for this to work... Try again.";
        alertDiv.classList.remove("invisible");
        document
    } else {
        let rotatorValue = rotator(inputValue);
        displayResult(rotatorValue, inputValue, input);
    }
}

// reverse the string
function rotator(inputValue) {
    let result = [];

    for (let i = inputValue.length - 1; i >= 0; i--) {
        result.push(inputValue[i]);
    }

    return result.join('');
}

function displayResult(rotatorValue, inputValue, input) {
    if (rotatorValue === inputValue) {
        title.textContent = "Congratulations!";
        message.innerHTML = `
            You have entered a <span class="fw-bold">Palindrome</span>.<br>
            The original value is :<span class=fw-bold>${input}</span><br>
            The reversed value is : <span class="fw-bold">${rotatorValue}</span>
        `;
    } else {
        title.textContent = "Oh no:(";
        message.innerHTML = `
            The string you entered is <span class = "fw-bold" > not a Palindrome </span>.<br>
            The original value is :<span class=fw-bold>${input}</span><br>
            The reversed value is : <span class="fw-bold">${rotatorValue}</span>
        `;
    }

    alertDiv.classList.remove("invisible");
}

document.getElementById('submitButton').addEventListener('click', () => {
    start();
    document.getElementById("phrase").value = "";
});

document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    start();
    document.getElementById("phrase").value = "";
});