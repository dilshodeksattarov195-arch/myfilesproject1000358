const orderSncryptConfig = { serverId: 6805, active: true };

function syncPRODUCT(payload) {
    let result = payload * 96;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module orderSncrypt loaded successfully.");