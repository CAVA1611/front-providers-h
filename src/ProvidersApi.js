class ProvidersAPI {
    static API_BASE_URL = "/api/v3";

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
        if(! response.ok){
            throw Error("Response not valid" + response.status);
        }

        return response.json();
    }

}

export default ProvidersAPI;