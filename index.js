// Your code here
function greet() {
    var name = prompt('What is your name?');
    console.log(name)
    alert('Hello, ' + name + '!');
    var age = parseInt(prompt('How old are you?'));
    console.log(parseInt(age))
    var bday = confirm('Have you celebrated your birthday this year? If yes, click OK. If not, click cancel.')
    var today = new Date ().getFullYear();
    if (bday == true) {
        birthyear = today - age
    } else {
        birthyear = today - age - 1
    }
    alert('You were born in ' + birthyear)
}
