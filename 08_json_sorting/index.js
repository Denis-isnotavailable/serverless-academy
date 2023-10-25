import { endpoints } from './endpoints.js';
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;


const findProperty = (objectToExplore) => {
    let result;

    for (const property in objectToExplore) {
        
        if (property === 'isDone') {
            result = objectToExplore[property];
            break;

        } else if (typeof objectToExplore[property] === 'object' && !Array.isArray(objectToExplore[property])) {
            result = findProperty(objectToExplore[property]);
        }
    }

    return result;
}


const sorting = async () => {
    let trueCounter = 0;
    let falseCounter = 0;
    let errorCounter = 0;

    for (let i = 0; i < endpoints.length; i++) {
        try {
            const res = await fetch(endpoints[i]);
            const data = await res.json();
            console.log(data)
            let isDone = findProperty(data);
            console.log(isDone)
        } catch (e) {
            console.error(e)
        }
        
    }    
}

sorting();