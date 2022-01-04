export class Order{
  orderID:number;
  customer:string;
  orderNum:string;
  isFulfilled:boolean;
  isDelivery?:boolean;
  additionalInfo?:string;
  deliveryLocation?:string;
  dateOrdered:Date;
}
