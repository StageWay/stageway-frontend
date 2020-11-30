import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  AfterViewInit
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export function StageFormGroup(formBuilder: FormBuilder){
  return formBuilder.group({
    id:[],
    stageTitle:[]
  });
}

@Component({
  selector: 'app-stage-create-dialog',
  templateUrl: './stage-create-dialog.component.html',
  styleUrls: ['./stage-create-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StageCreateDialogComponent implements OnInit {
  @Output() remove = new EventEmitter<FormGroup>();
  @Input() customGroup: FormGroup;

  constructor() { }


  ngOnInit() {
  }

}
