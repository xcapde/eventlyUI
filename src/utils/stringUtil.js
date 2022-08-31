export const stringFormat = {
    cutString(str) {
        return str.substring(1, str.length).split('-').join(' ');
    }
}