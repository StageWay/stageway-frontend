import { AuthService } from '@auth0/auth0-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StageDetailModel } from './stage-detail-model';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StageService {

APIUrl: string = environment.baseAPIUrl;

constructor(private http:HttpClient, private auth: AuthService) { }

  token: string;

  prepareToken() {
    this.auth.idTokenClaims$.subscribe(data => {
      this.token =  data["__raw"];
    })
  }

  getAllStages():Observable<StageDetailModel[]>{
    this.prepareToken()
    const headers = { 'content-type': 'application/json', 'Authorization': this.token}  
    return this.http.get<StageDetailModel[]>(this.APIUrl+'/Stages', {headers: headers});
  }

  postStage(stage:StageDetailModel): Observable<any> {
    this.prepareToken()
    const headers = { 'content-type': 'application/json', 'Authorization': this.token}  
    const body = JSON.stringify(stage);
    console.log(body);
    return this.http.post(this.APIUrl + '/Stages', body,{'headers':headers});
  }

  deleteStage(stageId: number) {
    this.prepareToken()
    const headers = { 'content-type': 'application/json', 'Authorization': this.token}  
    return this.http.delete(this.APIUrl + '/Stages/' + stageId, {headers: headers});
  }

  putStage(stage: StageDetailModel) {
    this.prepareToken()
    const headers = { 'content-type': 'application/json', 'Authorization': this.token}   
    const body = JSON.stringify(stage);
    console.log(body);
    return this.http.put(this.APIUrl + '/Stages/' + stage.stageId, body,{'headers':headers});
  }


}
