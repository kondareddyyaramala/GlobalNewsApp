const constructObject = (config, ref) => {
    config = config || {};
    Object.keys(config).forEach(key => {
        ref[key] = config[key];
    })
}


export default constructObject;