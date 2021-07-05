
const ellipsis = (value: string, arg: number) =>{
    if (arg === undefined) {
        return value;
    }
    if (value.length > arg) {
        return value.substring(0, arg) + '...';
    }
    return value

}

export default ellipsis