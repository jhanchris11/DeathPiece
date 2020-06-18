export const transformConfigFileInOneJson = (configFileData) => {
    let newObject = {};
    Object.keys(configFileData).map( (key) => {
        newObject = { ... newObject , ... configFileData[key] }
    });
    return newObject;
}

export const transformJsonToConfigFile = (json,configFileData) => {
    Object.keys(json).map( key => {
        Object.keys(configFileData).map( (keyConfig) => {
            if(Object.keys(configFileData[keyConfig]).includes(key)){
                configFileData[keyConfig][key] = json[key];
            }
        });
    });
    return configFileData;
}