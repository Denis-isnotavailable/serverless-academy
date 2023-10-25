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
            const isDone = findProperty(data);

            if (isDone) {
                console.log(`[Success] ${endpoints[i]}: isDone - True`);
                trueCounter++;
            } else if (!isDone && isDone !== undefined) {
                console.log(`[Success] ${endpoints[i]}: isDone - False`);
                falseCounter++;                
            }

        } catch (e) {
            if (errorCounter < 3) {
                errorCounter++;
                i--;
            } else {
                errorCounter = 0;
                console.log(`[Fail] ${endpoints[i]}: The endpoint is unavailable`);
            }            
        }        
    }    

    console.log(`Found True values: ${trueCounter},`);
    console.log(`Found False values: ${falseCounter}`);
}

sorting();