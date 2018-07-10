import { Wallet } from "./wallet.model";

/**
 * _id   = db.ObjectIdField()
    amount = db.FloatField()
    wallet = db.ReferenceField(Wallet)
    created = db.DateTimeField()
    last_deposit_id = db.StringField()
 */



 export class Deposit{
   
    constructor(public id : string , public amount : string, public wallet : Wallet , public created : Date , public last_deposit_id : string){}

 }

