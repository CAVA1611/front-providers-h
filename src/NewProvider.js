import { useState } from "react";

function NewProvider(props) {
    const [cif, setCif] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [cp, setCp] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [stock_sale, setStock_sale] = useState('');

    function onClick() {
        const newProvider ={
            cif: cif,
            name: name,
            address: address,
            cp: cp,
            phone: phone,
            email: email,
            code: code,
            stock_sale: stock_sale
        };

        const result = props.onAddProvider(newProvider);
        if(!result) {
            setCif('');
            setName('');
            setAddress('');
            setCp('');
            setPhone('');
            setEmail('');
            setCode('');
            setStock_sale('');
        }
        
    }

    return(
        <tr>
            <td><input className="form-control"  placeholder="A58818501" name="cif" value={cif} onChange={(event) => setCif(event.target.value)}/></td>
            <td><input className="form-control" placeholder="Cesar" name="name" value={name} onChange={(event) => setName(event.target.value)}/></td>
            <td><input className="form-control" placeholder="Luis Montoto, 26" name="address" value={address} onChange={(event) => setAddress(event.target.value)}/></td>
            <td><input className="form-control" placeholder="41019" name="cp" value={cp} onChange={(event) => setCp(event.target.value)}/></td>
            <td><input className="form-control" placeholder="603546790" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)}/></td>
            <td><input className="form-control" placeholder="ejemplo@mail.com" name="email" value={email} onChange={(event) => setEmail(event.target.value)}/></td>
            <td><input className="form-control" placeholder="AB12" name="code" value={code} onChange={(event) => setCode(event.target.value)}/></td>
            <td><input className="form-control" name="stock_sale" value={stock_sale} onChange={(event) => setStock_sale(event.target.value)}/></td>
            <td><button className="btn btn-primary" onClick={onClick}>ADD PROVIDER</button></td>
        </tr>
    )
}

export default NewProvider;