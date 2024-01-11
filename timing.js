async function dayfinder(){
        let today = new Date();
        let dayOfWeek = today.getDay();
        const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        return daysOfWeek[dayOfWeek];
}

async function timing(){
    const now = new Date();
    const hours = 60*(now.getHours()); // Ensure two digits
    return hours+(now.getMinutes()); // Ensure two digits
}
module.exports = {dayfinder,timing}
