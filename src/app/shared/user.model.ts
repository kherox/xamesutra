

/**
 * {
        "name": "Morphus Akhenathon",
        "username": "morphus",
        "_id": "5b0a0adf1f9c5c1e14299ad8",
        "contact": "58000823",
        "email": "dvoyd@hotmail.fr",
        "password": "8ec524dd9ea0e0ff05174b016603bc5a23a36cd12bb53293b197e7e9ee09f5a3",
        "created": "2018-05-27 11:39:55.940098"
    },
    {
        "name": "Kakou Denis",
        "username": "kherox",
        "_id": "5b0a0b7c1f9c5c3e60412daa",
        "contact": "41179922",
        "email": "kk20deis@hotmail.fr",
        "p
    }
 * class User(db.Document):
    _id       = db.ObjectIdField()
    name      = db.StringField()
    username  = db.StringField()
    password  = db.StringField()
    contact   = db.StringField()
    email     = db.EmailField()
    created   = datetime.datetime.now()

 */

 export class User {
     constructor(public id : string , public name : string , public username : string,
                public password : string , public contact : string , public email : string ,
                public created : Date){}
 }

 export class UserToken {
     constructor(public token : string){}
 }