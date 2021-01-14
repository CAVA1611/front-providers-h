function Provider(props) {

    return(
        <div>
            <div>{props.provider.cif}</div>
            <div>{props.provider.name}</div>
            <div>{props.provider.address}</div>
            <div>{props.provider.cp}</div>
            <div>{props.provider.phone}</div>
            <div>{props.provider.email}</div>
        </div>
    )
    
}

export default Provider;