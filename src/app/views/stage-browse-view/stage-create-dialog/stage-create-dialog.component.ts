import { ChangeDetectionStrategy, Component, EventEmitter, Input,
  OnInit,
  Output,
  AfterViewInit
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StageService } from '../../stage-browse-view/stage.service';
import { StageDetailModel } from "../../stage-browse-view/stage-detail-model";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-stage-create-dialog',
  templateUrl: './stage-create-dialog.component.html',
  styleUrls: ['./stage-create-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StageCreateDialogComponent implements OnInit {
  stage = new StageDetailModel();
  
  constructor(private service:StageService, private dialogRef: MatDialogRef<StageCreateDialogComponent>) {}
  
  @Output() remove = new EventEmitter<FormGroup>();

  ngOnInit() {
  }

  saveStage() {
    this.service.postStage(this.stage)
      .subscribe(data => {
        console.log(data)
      })
      this.dialogRef.close     
  }
  
}
