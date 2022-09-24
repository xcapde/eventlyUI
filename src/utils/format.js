const format = {
    cutString(str) {
        return str.substring(1, str.length).split('-').join(' ');
    },
    optionsToReactSelectOptions(obj) {
        return Object.keys(obj).map(k => obj[k] = { value: obj[k].name.toLowerCase(), label: obj[k].name.toLowerCase()});
    },
    reactCreatableOptionsToOptions(obj) {
        
        return Object.keys(obj).map(k => obj[k].value);
    },
    reactSelectOptionToOption(obj){
        console.log(obj.value)
        return obj.value;
    },
    eventDateToCalendarDate(str) {
        let date = str.split("-").join("/");
        return date.split("/").map(n => {
            if (n[0] !== "0") return n;
            return n[1]
        }).join("/")
    },
    cutUrl(str) {
        let url = str.substring(str.indexOf('://') + 3, str.length);
        return url.substring(0, url.indexOf("/"));
    },
    uppercaseFirstLetter(word) {
        return word.charAt(0).toUpperCase()+word.slice(1);
    },
    timeStampToDateAndHour(str) {
        let date = this.eventDateToCalendarDate(str.split("T")[0].split("-").reverse().join("-"));
        let hour = str.split("T")[1].substring(0, str.split("T")[1].lastIndexOf(".") - 3);
        return `${date} at ${hour}`;
    },
    cutNotification(str) {
        let cutIn = 'http://';
        return str.substring(0, str.indexOf(cutIn));
    },
    cutNotificationLink(str) {
        let cutIn = 'http://';
        return str.substring(str.indexOf(cutIn), str.length-1);
    }
}

export default format;