async function requester(method, url, data) {
    const options = {};
    
    if (method !== `GET`) {
        options.method = method;
    }

    if (data) {
        options.headers = {
            "Content-Type": "application/json",
        };

        options.body = JSON.stringify(data);

    }

    const response = await fetch(url, options);
    const result = response.json();  

    return result;

};



export const get = (url, data) => requester(`GET`, url, data);
export const post = (url, data) => requester(`POST`, url, data);
export const put = (url, data) => requester(`PUT`, url, data);
export const del = (url, data) => requester(`DELETE`, url, data);