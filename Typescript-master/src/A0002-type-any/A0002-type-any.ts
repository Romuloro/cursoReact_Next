// utilizar o any no ultimo caso
function showMessage(msg: any) {
    return msg;
}

console.log(showMessage('bora pow'));
console.log(showMessage([1, 5, 4, 6]));
console.log(showMessage(1));
