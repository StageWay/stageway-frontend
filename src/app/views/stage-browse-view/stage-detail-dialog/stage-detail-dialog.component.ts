import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoachingViewComponent } from '../../coaching-view/coaching-view.component';
import { StageDetailModel } from "../../stage-browse-view/stage-detail-model";
import { StageService } from '../stage.service';
import { DatePipe } from '@angular/common'
import { ContactPerson } from '../stage-create-dialog/stage-create-dialog.component';


@Component({
  selector: 'app-stage-detail-dialog',
  templateUrl: './stage-detail-dialog.component.html',
  styleUrls: ['./stage-detail-dialog.component.css'],
})
export class StageDetailDialogComponent implements OnInit {
  show = false;

  private initStage: StageDetailModel;
  private datepipe: DatePipe;
  contactPersons: ContactPerson[] = []

  constructor(private service: StageService, private dialogRef: MatDialogRef<any> , @Inject(MAT_DIALOG_DATA) data: {stageItem: StageDetailModel}) {
    this.initStage = data.stageItem;
    if(typeof this.initStage.stageContactName !== 'undefined') {
      if(this.initStage.stageContactName.includes(";")) {
        var names = this.initStage.stageContactName.split(";");
        var emails = this.initStage.stageContactEmail.split(";");
        var tels = this.initStage.stageContactTel.split(";");
        for (let index = 0; index < names.length; index++) {
          this.contactPersons.push({
            name: names[index],
            tel: tels[index],
            email: emails[index],
          })
        }
      } else {
        this.contactPersons.push({
          name: this.initStage.stageContactName,
          tel: this.initStage.stageContactTel,
          email: this.initStage.stageContactEmail,
        })
      }
    } else {
      this.contactPersons.push({
        name: "",
        tel: "",
        email: "",
      })
    }
   }

  @Input()
    stageId: number;
    stageTitle: string;
    stageSubtitle: string;
    stageSummary: string;
    stageTasks: string;
    stageProfile: string;
    stageBenefits: string;
    stageCompany: string;
    stageLocation: string;
    stageDate: Date;
    stageContactName: string; 
    stageContactEmail: string;
    stageContactTel: string;
    stageApplyConatct: string;

  ngOnInit(): void {
    this.stageId = this.initStage.stageId;
    this.stageTitle = this.initStage.stageTitle;
    this.stageSubtitle = this.initStage.stageSubtitle;
    this.stageSummary = this.initStage.stageSummary;
    this.stageTasks = this.initStage.stageTasks;
    this.stageProfile = this.initStage.stageProfile;
    this.stageBenefits = this.initStage.stageBenefits;
    this.stageCompany = this.initStage.stageCompany;
    this.stageLocation = this.initStage.stageLocation;
    // let formattedDate = this.datepipe.transform(this.initStage.stageDate, 'yyyy-MM-dd');
    this.stageDate = this.initStage.stageDate;
    this.stageContactName = this.initStage.stageContactName;
    this.stageContactEmail = this.initStage.stageContactEmail;
    this.stageContactTel = this.initStage.stageContactTel;
    this.stageApplyConatct = this.initStage.stageApplyConatct;

  }

  getMultilineString(orig: string): string {
    return orig.replace(/\n/gi, " <br> ");
  }

}
