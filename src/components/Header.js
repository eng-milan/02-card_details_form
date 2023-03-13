import CardFront from "../images/bg-card-front.png"
import CardBack from "../images/bg-card-back.png"
import CardLogo from "../images/card-logo.svg"


function Header({ cardInformation, className }) {
    const { cardholderName, cardNumber, cardExpiryMounth, cardExpiryYear, cardCvc } = cardInformation
    const newCardNumber = `${cardNumber.slice(0, 4)} ${cardNumber.slice(4, 8)} ${cardNumber.slice(8, 12)} ${cardNumber.slice(12, 16)}`

    return <div className={`relative h-[280px] ${className}`}>
        <div className="absolute right-5 top-8 lg:-right-[190px] lg:top-[480px]">
            <img src={CardBack} className="w-[370px]" alt="Card's Back" />
            <p className="absolute top-[90px] right-12 text-white text-sm lg:left-[300px] lg:top-[90px]">
                {cardCvc === "" ? "000" : cardCvc}
            </p>
        </div>
        <div className="absolute right-[90px] top-[145px] lg:top-[250px] lg:-right-[110px]">
            <img src={CardFront} className="w-[370px]" alt="Card's Front" />
            <img className="absolute top-6 left-6 w-16" src={CardLogo} alt="altCard's Logo" />
            <p className="absolute top-24 left-[28px] text-white font-bold text-lg tracking-[6px]">
                {cardNumber === "" ? "0000 0000 0000 0000" : newCardNumber}
            </p>
            <p className="absolute top-[150px] left-6 text-white text-sm w-[250px] truncate">
                {cardholderName === "" ? "JANE APPLESEED" : cardholderName}
            </p>
            <p className="absolute top-[150px] right-6 text-white text-sm">
                {`${cardExpiryMounth === "" ? "00" : cardExpiryMounth}/${cardExpiryYear === "" ? "00" : cardExpiryYear}`}
            </p>
        </div>
    </div>
}

export default Header