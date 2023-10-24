const fs = require('fs').promises;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;


const handleGrouping = (list) => {
    const groupingList = [];

    while (list.length > 0) {
        const { _id, name } = list[0].user;
        const user = { userId: _id, userName: name, vacations: [] };
        
        findVacations(list, user);             
        groupingList.push(user);
    }

    return groupingList;
}

const findVacations = (list, user) => {
    let i = list.findIndex(item => item.user._id === user.userId);
    while (i !== -1) {
        user.vacations.push({ startDate: list[i].startDate, endDate: list[i].endDate });
        list.splice(i, 1);
        i = list.findIndex(item => item.user._id === user.userId);
    }
}

const writeToFile = (list) => {
    fs.writeFile('./updatedList.json', JSON.stringify(list));
}


const groupVacations = async () => {
    try {
        const res = await fetch("https://jsonbase.com/sls-team/vacations");
        const data = await res.json();
        const updatedList = handleGrouping(data);

        writeToFile(updatedList);
        console.table(updatedList);
        
    } catch (e) {
        console.error("ERROR: ", e);
    }
};

groupVacations();