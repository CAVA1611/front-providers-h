function Provider(props) {

    return(
        <tr>
            <td>{props.provider.cif}</td>
            <td>{props.provider.name}</td>
            <td>{props.provider.address}</td>
            <td>{props.provider.cp}</td>
            <td>{props.provider.phone}</td>
            <td>{props.provider.email}</td>
            <td>
                <button className="btn btn-primary" onClick={() => props.onEdit(props.provider)}>Edit</button>
                <button className="btn btn-primary" onClick={() => props.onDelete(props.provider)}>Delete</button>
            </td>

        </tr>
    )
    
}

export default Provider;