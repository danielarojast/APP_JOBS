export async function post(url, info){
    try {
        const reponse= await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(info)
        })
        
        const data= await reponse.json();

        return data;
    } catch (error) {
    }

};

export async function get(url){
    try {
        const reponse= await fetch(url);
        const data= await reponse.json();
        return data;
    } catch (error) {
        
    }
}

export  async function deleteHttp(url){
    try {
        const reponse = await fetch(url,{
            method: "DELETE",
        })

        const data= reponse.json()
        return data;
    } catch (error) {
        
    }
}

export  async function update(url, info){
    try {
        const reponse = await fetch(url,{
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(info)
        })

        const data= reponse.json()
        return data;
    } catch (error) {
        
    }
}


