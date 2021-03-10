import { AuthService } from '@auth0/auth0-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StageDetailModel } from './stage-detail-model';


@Injectable({
  providedIn: 'root'
})
export class StageService {


constructor(private http:HttpClient, private auth: AuthService) { }

  token: string;

  prepareToken() {
    this.auth.idTokenClaims$.subscribe(data => {
      this.token =  "Bearer " + data["__raw"];
    })
  }

  getAllStages():Observable<StageDetailModel[]>{
    const headers = { 'content-type': 'application/json', 'Authorization': this.token}  
    return this.http.get<StageDetailModel[]>(environment.baseAPIUrl + '/Stages', {'headers':headers});
  }

  postStage(stage:StageDetailModel): Observable<any> {
    const headers = { 'content-type': 'application/json', 'Authorization': this.token}  
    const body = JSON.stringify(stage);
    console.log(body);
    return this.http.post(environment.baseAPIUrl + '/Stages', body,{'headers':headers});
  }

  deleteStage(stageId: number) {
    const headers = { 'content-type': 'application/json', 'Authorization': this.token}  
    return this.http.delete(environment.baseAPIUrl + '/Stages/' + stageId,{'headers':headers});
  }

  putStage(stage: StageDetailModel) {
    const headers = { 'content-type': 'application/json', 'Authorization': this.token}   
    const body = JSON.stringify(stage);
    console.log(body);
    return this.http.put(environment.baseAPIUrl + '/Stages/' + stage.stageId, body,{'headers':headers});
  }


}
