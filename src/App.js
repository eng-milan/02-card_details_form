import { useState } from "react"
import CardForm from "./components/CardForm"
import Header from "./components/Header"
import FormValidated from "./components/FormValidated"
import Footer from "./components/Footer"

function App() {
    const [cardInformation, setCardInformation] = useState({
        cardholderName: "",
        cardNumber: "",
        cardExpiryMounth: "",
        cardExpiryYear: "",
        cardCvc: "",
        formValid: false
    })

    const onChange = (target) => {
        switch (target.name) {
            case "cardholderName":
                const newName = target.value.replaceAll(/[~@!#$%^&*()_+`\-=[\]{};'\\:"|,./<>?]/g, "");
                setCardInformation({ ...cardInformation, cardholderName: newName })
                break
            case "cardNumber":
                const newNumber = target.value.replaceAll(/[a-zA-Z~@!#$%^&*()_+`\-=[\]{};'\\:"|,./<>?]/g, "");
                setCardInformation({ ...cardInformation, cardNumber: newNumber })
                break
            case "cardExpiryMounth":
                const newMounth = target.value.replaceAll(/[a-zA-Z~@!#$%^&*()_+`\-=[\]{};'\\:"|,./<>?]/g, "");
                setCardInformation({ ...cardInformation, cardExpiryMounth: newMounth })
                break
            case "cardExpiryYear":
                const newYear = target.value.replaceAll(/[a-zA-Z~@!#$%^&*()_+`\-=[\]{};'\\:"|,./<>?]/g, "");
                setCardInformation({ ...cardInformation, cardExpiryYear: newYear })
                break
            case "cardCvc":
                const newCvc = target.value.replaceAll(/[a-zA-Z~@!#$%^&*()_+`\-=[\]{};'\\:"|,./<>?]/g, "");
                setCardInformation({ ...cardInformation, cardCvc: newCvc })
                break
            default: return
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const { cardholderName, cardNumber, cardExpiryMounth, cardExpiryYear, cardCvc } = cardInformation

        if ((cardholderName && cardNumber && cardExpiryMounth && cardExpiryYear && cardCvc) !== "" && cardNumber.length === 16 && cardCvc.length === 3 && (cardExpiryYear.length && cardExpiryMounth.length) === 2) {
            setCardInformation({ ...cardInformation, formValid: true })
        } else {
            setCardInformation({ ...cardInformation, formValid: false })
        }
    }

    const onContinue = () => {
        setCardInformation({
            cardholderName: "",
            cardNumber: "",
            cardExpiryMounth: "",
            cardExpiryYear: "",
            cardCvc: "",
            formValid: false
        })
    }

    return <div className="flex justify-center" role="main">
        <div className="mobileheader w-[483px] lg:h-screen lg:flex lg:w-full">
            <Header className="lg:w-[30%]" cardInformation={cardInformation} />
            {cardInformation.formValid ? <FormValidated onContinue={onContinue} className="lg:w-[70%]" /> :
                <CardForm className="lg:w-[70%]" onChange={onChange} cardInformation={cardInformation} handleSubmit={onSubmit} />
            }
        </div>
        <Footer className="bg-white" />
    </div>
}

export default App