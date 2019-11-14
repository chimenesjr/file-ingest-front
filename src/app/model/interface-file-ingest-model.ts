export class IFileIngest{

    public id: string;
    public context: string;
    public time_to_hold: number;

    constructor (context?: string, time_to_hold?: number){
        this.context = context;
        this.time_to_hold = time_to_hold;
    }

}