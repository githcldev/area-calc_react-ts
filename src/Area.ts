export interface AreaParams {
    w: number,
    h: number
}

export interface InEvent {
    ev: React.FormEvent<HTMLInputElement>,
    fr: Function
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