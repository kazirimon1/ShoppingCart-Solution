function UpdateCaseNumber(isIncrease) {
    const PhoneNumberField = document.getElementById('phone-number-field');
    const PhoneNumberString = PhoneNumberField.value;
    const phoneNumber = parseInt(PhoneNumberString);

    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = phoneNumber + 1;
    }
    else {
        newPhoneNumber = phoneNumber - 1;
    }

    PhoneNumberField.value = newPhoneNumber
    return newPhoneNumber;

}
function UpdatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice
}



document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = UpdateCaseNumber(true)

    UpdatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal()







})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = UpdateCaseNumber(false)


    UpdatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal()
})