import succesfull from "../images/icon-complete.svg"

function FormValidated({ onContinue, className }) {

    return <div className={`flex flex-col pt-32 px-10 bg-white items-center lg:px-[20%] ${className}`}>
        <img className="w-[100px]" src={succesfull} alt="complete" />
        <h1 className="mt-10 text-3xl">THANK YOU!</h1>
        <h2 className="mt-5 text-gray-500">We've added your card details</h2>
        <button className="mt-12 py-3 bg-blue-900 text-white text-xl rounded-lg w-full" onClick={onContinue}>Continue</button>
    </div>
}

export default FormValidated