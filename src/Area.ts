export interface AreaParams {
    w: number,
    h: number
}

export class Area {
    width;
    height;
    constructor(params: AreaParams) {
        this.width = params.w;
        this.height = params.h;
    }
    calc(){
        return this.width * this.height;
    }
}