import {useState} from 'react';
import Provider from './Provider.js';
import EditProvider from './EditProvider.js';


function EdittableProvider(props) {
    const[isEditing, setIsEditing] = useState(false);

    function saveProvider(provider) {
        const result = props.onEdit(provider);
        if(result){
            setIsEditing(false);
        }
    }

    var providerRender;
    if(isEditing){
        providerRender = <EditProvider provider={props.provider} onDelete={props.onDelete}  onSave={saveProvider}/>;
    }else{
        providerRender = <Provider provider={props.provider} onDelete={props.onDelete}  onEdit={() => setIsEditing(true)}/>
    }
    return providerRender;
}

export default EdittableProvider;