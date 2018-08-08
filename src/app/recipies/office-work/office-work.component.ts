import {Component, HostListener, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-office-work',
  templateUrl: './office-work.component.html',
  styleUrls: ['./office-work.component.css']
})
export class OfficeWorkComponent implements OnInit {
  workGroup: FormGroup;
  Email = new FormControl('');
  Password = new FormControl('');
  name = new FormControl('');
  age = new FormControl('');
  regexStr = '^[1-9]+[0-9]*$';
  ageValue = '';
  @HostListener('document:keyup ', ['$event'])
  onChange(event: any) {
    let eventVals = event.target.value;
    console.log('pak');
  }
  constructor() { }

  ngOnInit() {

    const maxControl = new FormControl(16, Validators.max(15));
    this.workGroup = new FormGroup({
      'Email': new FormControl(null, Validators.required),
      'Password': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
        Validators.max(5)
      ]),
      'profile': new FormArray([])
    });
  }

  addform() {
    (<FormArray>this.workGroup.get('profile')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'age': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
          Validators.max(5)
         ])
      })
    );
    console.log(this.workGroup);
  }
  onSubmit() {

  }
  delForm(index: number) {
    (<FormArray>this.workGroup.get('profile')).removeAt(index);
  }

}
