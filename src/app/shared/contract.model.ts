import { User } from "./user.model";
import { Entities } from "./entitie.model";

/**
 * _id              = db.ObjectIdField()
    name             = db.StringField()
    created          = db.DateTimeField()
    end              = db.DateTimeField()
    user             = db.ReferenceField(User)
    referer          = db.ReferenceField(Entity)
    current_amount   = db.FloatField()
    amount           = db.FloatField()
    categories       = db.StringField()
    description      = db.StringField()
    img              = db.StringField()

 */


 export class Contract{

   constructor(public id : string,public name : string,public created : string,
                public end : string,public user : User,public referer : Entities,
                public current_amount: number , public amount : number , 
                public categories : string,public description : string, public img : string){}

 }