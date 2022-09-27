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
        let description = str;
        if(description.includes(cutIn)){
           description = str.substring(0, str.indexOf(cutIn));
        }
        if(!description.includes('https://')) return description;
        let desc = description.split('https://')[0];
        let link1 = description.split('https://')[1];
        link1 = 'https://'+this.cutNotificationLink(link1, 'https://', link1.indexOf(' the'))
        if(!description.split('https://')[2]) return <p>{desc}<a style={{color:'indianred'}} href={`${link1}`}>link</a> </p>
        let desc2 =  description.split('https://')[1].substring(description.split('https://')[1].indexOf(' the'), description.split('https://')[1].indexOf(' in') )+' in'
        let link2 = 'https://'+this.cutNotificationLink(description.split('https://')[2], 'https://', description.split('https://')[2].indexOf(' the') );
        let desc3 = description.split('https://')[2].substring(description.split('https://')[2].indexOf(' the'), str.length-1)
        return <span>{desc}<a style={{color:'indianred'}} href={`${link1}`}>link</a> {desc2} <a style={{color:'indianred'}} href={`${link2}`}>link</a> {desc3}</span>
    },
    cutNotificationLink(str, cut, end) {
        let cutIn = cut;
        return str.substring(str.indexOf(cutIn), end);
    },
    shortLocation(location) {
        let city = location.split(",")[2];
        let region = location.split(",")[1].slice(1);
        return `${city}, ${region}`;
    }
}

export default format;