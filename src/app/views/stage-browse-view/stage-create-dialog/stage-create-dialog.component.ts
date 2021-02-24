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

  stageImage;
  
  constructor(@Inject(MAT_DIALOG_DATA) public stage: StageDetailModel) {
  }
  
  @Output() remove = new EventEmitter<FormGroup>();

  ngOnInit() {
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
  
}
