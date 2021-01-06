export const callServer = async (path, method, data = {}) =>
{

    const bodyPart = method === 'POST' ? { body: JSON.stringify(data) } : {};

    const result = await fetch(path, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        ...bodyPart,
    });

    // console.log(result.headers.get('content-type'));
    const msg = await result.json();

    return { status: result.status, ...msg };
}

export const callServer2 = async (path, method, data = {}) =>
{

    const result = await fetch(path, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify(data),
    });

    return result;
}

export const callServerGET = async (path) => {
    const result = await fetch(path, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    });

    return result;
}

export const callServerWithoutParsing = async (path, method, data = {}) =>
{
    const bodyPart = method === 'POST' ? { body: JSON.stringify(data) } : {};

    const result = await fetch(process.env.REACT_APP_HOST_NAME + path, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        ...bodyPart,
    });

    return result;
}
