function getTExtElementValuebyID(elementID) {
    const phoneTotalElement = document.getElementById(elementID);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;

}

function setTExtElementbyID(elementID,value) {
    const subTotalElement = document.getElementById(elementID);
    subTotalElement.innerText = value;

    
}


function calculateSubTotal() {
        //calculate total.
        const currentPhoneTotal = getTExtElementValuebyID('phone-total');
        const currentCaseTotal = getTExtElementValuebyID('case-total')

        const currentSubTotal = currentPhoneTotal + currentCaseTotal
        setTExtElementbyID('sub-total', currentSubTotal)


        //calculate tax
        const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
        const taxAmount = parseFloat(taxAmountString)
        setTExtElementbyID('tax-total', taxAmount)
        const FAinalAmount = currentSubTotal + taxAmount;
        setTExtElementbyID('fainal-total',FAinalAmount)
    
}