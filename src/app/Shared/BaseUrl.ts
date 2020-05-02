import { Global } from './Global';
import { environment } from 'src/environments/environment';

export class Urls {
    public static TASK_GETALLTASKS = environment.url + Global.TASK_ENDPOINT + "GetAll";
    public static TASK_ADDTASK = environment.url + Global.TASK_ENDPOINT + "Add";
}