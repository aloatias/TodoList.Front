import { Global } from './Global';
import { environment } from 'src/environments/environment';

export class Urls {
    public static TASK_GETALL = environment.url + Global.TASK_ENDPOINT + "GetAll";
    public static TASK_ADD = environment.url + Global.TASK_ENDPOINT + "Add";
    public static TASK_UPDATESTATUS = environment.url + Global.TASK_ENDPOINT + "UpdateStatus";
}