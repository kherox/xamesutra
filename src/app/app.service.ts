import { Injectable } from "@angular/core";
import { Http, Headers,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Entities } from "./shared/entitie.model";

@Injectable()

export class AppService{
    private headers : Headers;
    private base_url: string = "http://127.0.0.1:5000";

    constructor(private _http : Http){
        this.headers = new Headers({
            "Content-Type": "application/json"
        })
    }

    /**
     *  response.json().forEach(element => {
                        console.log((new Entities(element.name, element.id)))
                    });
     */

    getEntitiesList(){
        return this._http
            .get(this.base_url + "/entities", { headers: this.headers })
            .map(
                (response : Response) => {
                    const data = [];
                     response.json().forEach(element => {
                        data.push(new Entities(element.name, element.id))
                    });
                    return data;
                }
            )
            .catch(
            (error: Response) => {
                return Observable.throw('error')
            }
            )
            
    }
}