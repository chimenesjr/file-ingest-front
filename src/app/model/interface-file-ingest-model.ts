export class IFileIngest{

    public id: string;
    public contextName: string;
    public time_to_hold: number;
    public type: string;
    public created: Date;
    public finish: Date;
    
    constructor (context?: string, time_to_hold?: number){
        this.contextName = context;
        this.time_to_hold = time_to_hold;
    }

}