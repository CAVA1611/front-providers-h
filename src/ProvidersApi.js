const axios = require('axios').default;
class ProvidersAPI {

    static API_BASE_URL = "/api/v1";

    static requestHeaders() {
        return {}
    }

    static async getAllProviders() {
        const headers = this.requestHeaders();
        const request = new Request(ProvidersAPI.API_BASE_URL + "/providers", {
            method: 'GET',
            headers: headers
        });
        const response = await fetch(request);
        if (!response.ok) {
            throw Error("Response not valid" + response.status);
        }
        return response.json();
    }

    static async deleteById(value) {

        axios.delete(ProvidersAPI.API_BASE_URL + "/providers/"+ value).then(res => {
            return res;
        }).catch(error => {
            console.error(error)
            throw Error("Response not valid" + error);
        });

      
    }

    static async postProvider(value) {
        axios.post(ProvidersAPI.API_BASE_URL + "/providers", value).then(res => {
            console.log("###")
            console.log(res)
            return res.data;
        }).catch(error => {
            console.error(error)
            
        });
     
    }

    static async updateById( value) {
        axios.put(ProvidersAPI.API_BASE_URL + "/providers/"+value.cif, value).then(res => {
            console.log("###")
            console.log(res)
            return res.data;
        }).catch(error => {
            console.error(error)
        });
     
    }

    static async updateEmail(id,email) {
        axios.put(ProvidersAPI.API_BASE_URL + "/providers/"+id +"/update" , email).then(res => {
            return res.data;
        }).catch(error => {
            console.error(error)
        });
     
    }

}
export default ProvidersAPI;