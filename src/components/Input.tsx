function Input(props: any) {
    return <div>
        <label htmlFor={props.id} className="block mb-2 text-sm font-medium text-gray-900 ">{props.label}</label>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
     block w-full p-2.5 "
            {...props} id={props.id} placeholder={props.placeholder} />
        {props.error && <p className="text-red-500">{props.error}</p>}
    </div>
}

export default Input