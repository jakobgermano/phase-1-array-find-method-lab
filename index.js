function superbowlWin(array) {
    const result = array.find(array => (array.result === 'W'));
    if(Boolean(result) === true) {
        return result.year;
    } else {
        return undefined;
    }
}