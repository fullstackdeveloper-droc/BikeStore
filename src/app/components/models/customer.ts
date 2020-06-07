import { Order } from "./order";
import { MatTableDataSource } from "@angular/material/table";

export declare class Customer {
    public customerId: number;
    public firstName: string;
    public lastName: string; 
    public phone: string;
    public email: string;
    public street: string;
    public city: string;
    public state: string;
    public zipCode: string;

    //-- list of customers orders
    public orders: Order[] | MatTableDataSource<Order>;
}
