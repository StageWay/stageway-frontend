import { AuthService } from '@auth0/auth0-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StageDetailModel } from './stage-detail-model';

@Injectable({
  providedIn: 'root'
})
export class StageService {

APIUrl: string = "http://localhost:9000/api";

constructor(private http:HttpClient, private auth: AuthService) { }

  token: string;

  prepareToken() {
    this.auth.idTokenClaims$.subscribe(data => {
      this.token =  "Bearer " + data["__raw"];
    })
  }

  getAllStages():Observable<StageDetailModel[]>{
    const headers = { 'content-type': 'application/json', 'Authorization': this.token}  
    return this.http.get<StageDetailModel[]>(this.APIUrl+'/Stages', {headers: headers});
  }

  postStage(stage:StageDetailModel): Observable<any> {
    const headers = { 'content-type': 'application/json', 'Authorization': this.token}  
    const body = JSON.stringify(stage);
    console.log(body);
    return this.http.post(this.APIUrl + '/Stages', body,{'headers':headers});
  }

  deleteStage(stageId: number) {
    const headers = { 'content-type': 'application/json', 'Authorization': this.token}  
    return this.http.delete(this.APIUrl + '/Stages/' + stageId, {headers: headers});
  }

  putStage(stage: StageDetailModel) {
    const headers = { 'content-type': 'application/json', 'Authorization': this.token}   
    const body = JSON.stringify(stage);
    console.log(body);
    return this.http.put(this.APIUrl + '/Stages/' + stage.stageId, body,{'headers':headers});
  }


}
