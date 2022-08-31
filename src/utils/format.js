const format = {
    cutString(str) {
        return str.substring(1, str.length).split('-').join(' ');
    }
}

export default format;