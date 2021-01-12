import { ChangeDetectionStrategy, Component, EventEmitter, Input,
  OnInit,
  Output,
  AfterViewInit
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StageService } from '../../stage-browse-view/stage.service';
import { StageDetailModel } from "../../stage-browse-view/stage-detail-model";
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stage-create-dialog',
  templateUrl: './stage-create-dialog.component.html',
  styleUrls: ['./stage-create-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StageCreateDialogComponent implements OnInit {
  stage = new StageDetailModel();
  
  stageImage;
  
  constructor(private service:StageService, private dialogRef: MatDialogRef<StageCreateDialogComponent>, private httpClient:HttpClient) {
  }
  
  @Output() remove = new EventEmitter<FormGroup>();

  ngOnInit() {
    // this.stage.stageTitle = 'Test';
    // this.stage.stageSubtitle = 'Test';
    // this.stage.stageSummary = 'Test';
    // this.stage.stageTasks = 'Test';
    // this.stage.stageProfile = 'Test';
    // this.stage. stageBenefits = 'Test';
    // this.stage.stageCompany = 'Test';
    // this.stage.stageLocation = 'Test';
    // this.stage.stageDate = new Date();
    // this.stage.stageContactName = 'Test'; 
    // this.stage.stageContactEmail = 'test@test.ch';
    // this.stage.stageContactTel = '+41 333 33 33';
    // this.stage.stageApplyConatct = 'testtest@test.ch';
  }

  onFileChanged(event) {
    if (event.target.files.length > 0) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event2) => {
        // Sets the html <img> tag to the image.
        this.stage.stageImage = reader.result.toString();
      };
    }
  }

  saveStage() {
    this.service.postStage(this.stage)
      .subscribe(data => {
        console.log(data)
      })
      this.dialogRef.close();    
  }

  
}
