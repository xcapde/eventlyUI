const format = {
    cutString(str) {
        return str.substring(1, str.length).split('-').join(' ');
    },
    tagsToOptions(obj) {
        return Object.keys(obj).map(k => obj[k] = { value: obj[k].name.toLowerCase(), label: obj[k].name.toLowerCase() });
    },
    optionsToTags(obj){
        return Object.keys(obj).map(k => obj[k].value);
    }
}

export default format;