
interface Login {
    email: string,
    password: string
}

const URL = "http://localhost:9000";

const requestPost = async(url: string, headers: HeadersInit, body: string) => {
    let str: string = "";

    await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
    }).then(res => res.json())
        .then(body => {
            str = JSON.stringify(body);
        })

    return str;
}

export const requestLogin = async(obj: Login) => {
    let str: string = "";
    let url: string = URL + "v1/login";
    let header: HeadersInit = {
        "Content-Type": "application/json"
    }
    let body: string = JSON.stringify(obj);

    await requestPost(url, header, body).then(res => str = res);
    return str;
}