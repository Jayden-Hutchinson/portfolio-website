type OrderFormInputProps = {
    type: string,
    name: string,
    placeholder:string
}

function OrderFormInput({type, name, placeholder}:OrderFormInputProps) {
    return <input className="bg-gray-500" type={type} name={name} placeholder={placeholder}/>
}

export default OrderFormInput;