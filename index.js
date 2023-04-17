// Code your solutions in this file
function writeCards(name, string) {
    let message = [];
    for (let i = 0; i < name.length; i++) {;
        message.push(`Thank you, ${name[i]}, for the wonderful ${string} gift!`);
    }
    return message;
}
function countDown(n) {
    let i = n;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}