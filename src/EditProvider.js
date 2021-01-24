import { useState } from 'react';

function EditProvider(props) {

    const [cif, setCif] = useState(props.provider.cif);
    const [name, setName] = useState(props.provider.name);
    const [address, setAddress] = useState(props.provider.address);
    const [cp, setCp] = useState(props.provider.cp);
    const [phone, setPhone] = useState(props.provider.phone);
    const [email, setEmail] = useState(props.provider.email);
    

    return(
        <tr>
            <td><input className="form-control" nanme="cif" value={cif} onChange={(event) => setCif(event.target.value)} /></td>
            <td><td><input className="form-control" nanme="name" value={name} onChange={(event) => setName(event.target.value)} /></td></td>
            <td><td><input className="form-control" nanme="address" value={address} onChange={(event) => setAddress(event.target.value)} /></td></td>
            <td><td><input className="form-control" nanme="cp" value={cp} onChange={(event) => setCp(event.target.value)} /></td></td>
            <td><td><input className="form-control" nanme="phone" value={phone} onChange={(event) => setPhone(event.target.value)} /></td></td>
            <td><td><input className="form-control" nanme="email" value={email} onChange={(event) => setEmail(event.target.value)} /></td></td>
            <td>
                <button className="btn btn-primary" onClick={() => props.onSave({cif: cif, name: name, address: address, cp:cp, phone: phone, email: email})}>Save</button>
                <button className="btn btn-primary" onClick={() => props.onDelete(props.provider)}>Delete</button> 
            </td>

        </tr>
    )
}


export default EditProvider;