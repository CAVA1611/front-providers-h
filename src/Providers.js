import  EditableProvider from './EditableProvider.js';
import { Fragment, useEffect, useState } from 'react';
import Alert from './Alert.js';
import NewProvider from './NewProvider.js';
import ProvidersAPI from './ProvidersApi.js';



function Providers(props) {


    const [message, setMessage] = useState(null);
    const [providers, setProviders] = useState([]);
    


    //function onProviderCancel(provider) {
    //    setProviders(false);
    //};

    useEffect(() => {
        async function fetchProviders() {
            try {
                const c = await ProvidersAPI.getAllProviders();
                setProviders(c);
            } catch(error) {
                setMessage('Could not onnect with the server');
            }
        }
        fetchProviders();

    }, []);

    function onAlertClose() {
        setMessage(null);
    };

    function onProviderDelete(provider) {
        //call API -DELETE by cif
        ProvidersAPI.deleteById(provider.cif).then(res =>{
           setProviders((prevProviders) => {
               return prevProviders.filter((c) => c.name !== provider.name)
        })
    });
          
    }


    function validateProviderCIF(provider) {
        if(provider.cif === '' || provider.name === '' || provider.address === '' || provider.email === '' || provider.code === ''){
            setMessage('Cannot leave empty fields');
            return false;
        } if(provider.cif.length < 9){
            setMessage('THE CIF must have at least 9 digits')
            return false;
        } if(provider.cp.length < 5){
            setMessage('The zip code must have at least 5 digits')
            return false;
        }//if(!eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", provider.email)){
           // setMessage('ingreso al mail')
       // }

        return true;
        
    }

    function onProviderEdit(newProvider, oldProvider) {
        const validation =  validateProviderCIF(newProvider);
        if(! validation) {
            return false;
        }
                //Call API - PUT Proider
                ProvidersAPI.updateById(newProvider)

        if(newProvider.cif !== oldProvider.cif){
            setMessage('Cannot change de CIF');
            return false;
        }

        setProviders((prevProviders) => {
            return prevProviders.map((c) => c.cif === oldProvider.cif ? newProvider : c);
            
        });

        return true;
       
    }

    function onAddProvider(provider) { 

        const validation = validateProviderCIF(provider);
        if(! validation) {
            return false;
        }else {
            //Call API - PORST method
            async function addProvider() {
                try {
                    await ProvidersAPI.postProvider(provider);  
                } catch(error) {
                    console.log(error)
                    setMessage('Could not connect with the server');
                }
            }
            addProvider();
        }


        setProviders((prevProviders) => {
            if(! prevProviders.find(c => c.cif === provider.cif)){
             return [...prevProviders, provider]
            } else {
                setMessage('Duplicate CIF')
                return prevProviders;
            }
         });     
    }

    

    return(
        <Fragment>
            <Alert message={message} onClose={onAlertClose}/>
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
                    <NewProvider onAddProvider={onAddProvider}/>
                    {providers.map((provider) => 
                        <EditableProvider key={provider.cif} provider={provider} 
                        onEdit={(newProvider) => onProviderEdit(newProvider, provider)} 
                        onDelete={onProviderDelete}
                        /> //onCancel={onProviderCancel}
                    )}
                </tbody>
            </table>
        </Fragment>
    )

}

export default Providers;
