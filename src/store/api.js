export const getData = (url = '') => {
    const response = fetch(`https://jsonplaceholder.typicode.com/${url}`).then(res => res.json()).then(json => json)
    return response
}

export const postData = (url='', body={}) => {
    const response =  fetch(`https://jsonplaceholder.typicode.com/${url}`, 
        {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
    ).then(res => res.json())
    .then(json => json)
    return response
}

export const updateData =  (url='', body={}) => {
    const response =  fetch(`https://jsonplaceholder.typicode.com/${url}`, 
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    ).then(res => res.json())
    .then(json => json)

    return response
}

export const deleteData =  (url='', body={}) => {
    const response = fetch(`https://jsonplaceholder.typicode.com/${url}`, 
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    ).then(res => res.json())
    .then(json => json)

    return response
}

export const getPhoto = () => {
    const response = fetch('https://picsum.photos/v2/list').then(res => res.json())
    return response
}