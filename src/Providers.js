
import Provider from './Provider.js';

function Providers(props) {




    return(
            <table className="table">
                <thead>
                    <tr>
                        <th>CIF</th>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                        <th>CP</th>
                        <th>PHONE</th>
                        <th>EMAIL</th>
                        <th>CODE</th>
                        <th>STOCK FOR SALE</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    props.providers.map((provider) => 
                    <Provider key={provider.cif} provider={provider}/>)
                    }
                </tbody>
            </table>
       
    )

}

export default Providers;
