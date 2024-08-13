export class Area {
    width;
    height;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    calc(){
        return this.width * this.height;
    }
}