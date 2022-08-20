function UpdateCaseNumber(isIncrease) {
    const CaseNumberField = document.getElementById('case-number-field');
    const CaseNumberString = CaseNumberField.value;
    const privousCaseNumber = parseInt(CaseNumberString);

    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = privousCaseNumber + 1
    }
    else {
        newCaseNumber = privousCaseNumber - 1
    }

    CaseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function UpdateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice
}


document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = UpdateCaseNumber(true)


    UpdateCaseTotalPrice(newCaseNumber)
    calculateSubTotal();


})


document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = UpdateCaseNumber(false);


    UpdateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();

})