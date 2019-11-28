import { FileTypeEnum } from "./file-type-enum";

export class IFileIngest{

    public id: string;
    public contextName: string;
    public time_to_hold: number;
    public type: FileTypeEnum;
    public created: Date;
    public finish: Date;
    public length: number;
    public is_bengal: boolean;
    
    constructor (context?: string, time_to_hold?: number){
        this.contextName = context;
        this.time_to_hold = time_to_hold;
    }

}