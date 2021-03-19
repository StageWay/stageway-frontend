import { ChangeDetectionStrategy, Component, EventEmitter, Input,
  OnInit,
  Output,
  AfterViewInit,
  Inject
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StageDetailModel } from "../../stage-browse-view/stage-detail-model";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stage-create-dialog',
  templateUrl: './stage-create-dialog.component.html',
  styleUrls: ['./stage-create-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StageCreateDialogComponent implements OnInit {

  stageImageBackup;
  pictureSizeOkay = true;
  
  constructor(@Inject(MAT_DIALOG_DATA) public stage: StageDetailModel) {
    this.stageImageBackup = stage.stageImage
  }
  
  @Output() remove = new EventEmitter<FormGroup>();

  ngOnInit() {
  }

  onFileChanged(event) {
    if (event.target.files.length > 0) {
      if(event.target.files[0]["size"] < 2621440) { //check filesize 2.5 MB
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event2) => {
          // Sets the html <img> tag to the image.
          this.stage.stageImage = reader.result.toString();
          document.getElementById("stageImg").style.color = "initial";
        };
        this.pictureSizeOkay = true;
      } else {
        this.stage.stageImage = this.stageImageBackup;
        document.getElementById("stageImg").style.color = "red";
        this.pictureSizeOkay = false;
      }
    }
  }
  
}
