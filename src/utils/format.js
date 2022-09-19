const format = {
    cutString(str) {
        return str.substring(1, str.length).split('-').join(' ');
    },
    tagsToOptions(obj) {
        return Object.keys(obj).map(k => obj[k] = { value: obj[k].name.toLowerCase(), label: obj[k].name.toLowerCase(), color: '#cf8d0c' });
    },
    optionsToTags(obj) {
        return Object.keys(obj).map(k => obj[k].value);
    },
    eventDateToCalendarDate(str) {
        let date = str.split("-").join("/");
        return date.split("/").map(n => {
            if (n[0] !== 0) return n;
            return n[1]
        }).join("/")
    }
}

export default format;