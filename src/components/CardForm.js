import Input from "./Input"
import inputsData from "../data/inputsData"

function CardForm({ cardInformation, onChange, handleSubmit, className }) {

    const renderedInputs = inputsData.map((input) => {
        return <Input
            key={input.name}
            value={cardInformation[input.name]}
            onChange={onChange}
            {...input} />
    })

    return <form onSubmit={e => handleSubmit(e)} className={`flex flex-col pt-32 lg:pl-[30%] lg:pr-[10%] bg-white ${className}`}>
        <div className="flex flex-wrap justify-between lg:mt-36">
            {renderedInputs}
        </div>
        <button className="mb-10 py-3 bg-blue-900 text-white text-xl rounded-lg">Confirm</button>
    </form >
}

export default CardForm