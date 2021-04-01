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
  contactPersons: ContactPerson[] = []
  
  constructor(@Inject(MAT_DIALOG_DATA) public stage: StageDetailModel) {
    this.stageImageBackup = stage.stageImage
    if(typeof stage.stageContactName !== 'undefined') {
      if(stage.stageContactName.includes(";")) {
        var names = stage.stageContactName.split(";");
        var emails = stage.stageContactEmail.split(";");
        var tels = stage.stageContactTel.split(";");
        for (let index = 0; index < names.length; index++) {
          this.contactPersons.push({
            name: names[index],
            tel: tels[index],
            email: emails[index],
          })
        }
      } else {
        this.contactPersons.push({
          name: stage.stageContactName,
          tel: stage.stageContactTel,
          email: stage.stageContactEmail,
        })
      }
    } else {
      this.addContactPerson()
    }
  }
  
  @Output() remove = new EventEmitter<FormGroup>();

  addContactPerson() {
    this.contactPersons.push({
      name: "",
      tel: "",
      email: "",
    })
  }

  removeContactPerson(person: ContactPerson) {
    this.contactPersons.splice(this.contactPersons.indexOf(person), 1)
    this.onUpdateContactPerson()
  }

  onUpdateContactPerson() {
    this.stage.stageContactEmail = "";
    this.stage.stageContactName = "";
    this.stage.stageContactTel = "";
    for (let index = 0; index < this.contactPersons.length; index++) {
      const element = this.contactPersons[index];
      if(this.contactPersons.length-1 == index){
        this.stage.stageContactName = this.stage.stageContactName + element.name;
        this.stage.stageContactEmail = this.stage.stageContactEmail + element.email;
        this.stage.stageContactTel = this.stage.stageContactTel + element.tel;
      } else {
        this.stage.stageContactName = this.stage.stageContactName + element.name + ";";
        this.stage.stageContactEmail = this.stage.stageContactEmail + element.email + ";";
        this.stage.stageContactTel = this.stage.stageContactTel + element.tel + ";";
      }
    }
  }

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

export interface ContactPerson {

  name: string;
  tel: string;
  email: string;

}
