
export class NumStr {
    num;
    constructor(num: number) {
        this.num = num
    }
    str() {
        let i = 1; let str = "";
        while(i < this.num + 1) {
            str = str + i + " ";
            i++;
        }
        return str;
    }
}