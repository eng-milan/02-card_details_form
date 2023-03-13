
let inputsData = [
    {
        name: "cardholderName",
        placeholder: "e.g. Jane Appleseed",
        label: "CARDHOLDER NAME",
        errormessage: "Please remove any special character",
    },
    {
        name: "cardNumber",
        placeholder: "e.g. 1234 5678 9123 0000",
        label: "CARD NUMBER",
        errormessage: "Needs to be 16 digits.",
        maxLength: "16",
    },
    {
        name: "cardExpiryMounth",
        placeholder: "MM",
        label: "EXP. DATE (MM/YY)",
        errormessage: "Between 1-12",
        maxLength: "2",
    },
    {
        name: "cardExpiryYear",
        placeholder: "YY",
        // label: "(MM/YY)",
        errormessage: "Not correct year format!",
        maxLength: "2",
    },
    {
        name: "cardCvc",
        placeholder: "CVC",
        label: "CVC",
        errormessage: "Enter 3 digits CVC!",
        maxLength: "3",
    }

]

export default inputsData