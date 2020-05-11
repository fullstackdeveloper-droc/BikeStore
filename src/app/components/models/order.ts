import { Customer } from "./customer";
import { Staffs } from "./staffs";
import { Stores } from "./stores";

export class Order {
    public orderId: number;
    public customerId : number;
    public orderStatus : number;
    public orderDate: Date;
    public requiredDate: Date;
    public shippedDate: Date;
    public storeId: number;
    public staffId: number;

    public customer?: Customer;
    public staff?: Staffs;
    public store?: Stores;
}
