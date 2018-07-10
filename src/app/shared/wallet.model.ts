import { User } from "./user.model";

/**
 * _id                 = db.ObjectIdField()
    user                = db.ReferenceField(User)
    amount              = db.FloatField()
    last_operation      = db.StringField()
    created             = datetime.datetime.now()
    last_deposit_amount = db.FloatField()
    last_deposit_date   = datetime.datetime.now()
 */

 export class Wallet {
     constructor(public id : string, public user : User , public amount : string , public last_operation : string , 
                public created : Date, public last_deposit_amount : string , public last_deposit_date : Date){}
 }