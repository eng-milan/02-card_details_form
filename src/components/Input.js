import classNames from "classnames"
import { useState } from "react"

function Input({ onChange, className, label, errormessage, ...rest }) {
    const classes = classNames("mt-2 px-4 py-2 border rounded-lg text-lg cursor-pointer w-full", className)
    const [error, setError] = useState("")

    const handleChange = (e) => {
        if (rest.name === "cardExpiryMounth" && Number(e.target.value) > 12) {
            setError("* 01-12")
        } else if (rest.name === "cardExpiryMounth" && e.target.value.length === 1) {
            setError("* 2 digits")
            onChange(e.target)
        }
        else if (rest.name === "cardExpiryYear" && e.target.value.length === 1) {
            setError("* 2 digit.")
            onChange(e.target)
        }
        else if (rest.name === "cardCvc" && (e.target.value.length === 2 || e.target.value.length === 1)) {
            setError("* 3 digit.")
            onChange(e.target)
        } else if (rest.name === "cardNumber" && 0 < e.target.value.length && e.target.value.length < 16) {
            setError("* 16 digits.")
            onChange(e.target)
        }
        else if (e.target.value === "") {
            setError("can't be blank")
            onChange(e.target)
        } else {
            setError("")
            onChange(e.target)
        }
    }

    return <div className={`${rest.name === "cardExpiryMounth" || rest.name === "cardExpiryYear" || rest.name === "cardCvc" ? "flex flex-col justify-end w-[150px] lg:w-[100px] xl:w-[120px] 2xl:w-[150px]" : "w-full"}`}>
        <label className={rest.name === "cardExpiryMounth" ? "w-[200px]" : ""}>{label}</label>
        <input
            onChange={handleChange}
            className={classes}
            {...rest}
        />
        <p className={`text-red-500 text-[14px] h-6 ${rest.name === "cardExpiryMounth" || rest.name === "cardExpiryYear" || rest.name === "cardCvc" ? "h-6 text-[12px]" : ""}`}>{error}</p>
    </div >
}

export default Input