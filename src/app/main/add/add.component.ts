import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { FormArray } from '@angular/forms';


class EdWordValidator {
  static cannotContainNumbers(control: AbstractControl) {
    if (RegExp('^([^0-9]*)$').test(control.value as string)) {
      return {cannotContainNumbers: true};
    }
    return null;
  }
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  wordForm: FormGroup;

  constructor() {
    this.wordForm = new FormGroup({
      edWord: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      edMeaning: new FormControl('', [
        Validators.required,
      ]),
      edWordClass: new FormControl('', [
        Validators.required
      ]),
      edPronounciations: new FormGroup({
        edIpa: new FormControl('', [
          Validators.required,
        ]),
        edEnglishPronounciation: new FormControl('', [
          Validators.required,
        ]),
        edBritishPronounciation: new FormControl('', [
          Validators.required,
        ])
      }),
      edSynonyms: new FormArray([
        new FormControl('', [
          Validators.required,
        ])
      ]),
      edAntonyms: new FormArray([
        new FormControl('', [
          Validators.required,
        ])
      ])
    });
  }
  get edWord() {
    return this.wordForm.get('edWord');
  }
  get edMeaning() {
    return this.wordForm.get('edMeaning');
  }
  get edWordClass() {
    return this.wordForm.get('edWordClass');
  }
  get edIpa() {
    return this.wordForm.get('edPronounciations').get('edIpa');
  }
  get edEnglishPronounciation() {
    return this.wordForm.get('edPronounciations').get('edEnglishPronounciation');
  }
  get edBritishPronounciation() {
    return this.wordForm.get('edPronounciations').get('edBritishPronounciation');
  }
  get edSynonyms() {
    return this.wordForm.get('edSynonyms') as FormArray;
  }
  get edAntonyms() {
    return this.wordForm.get('edAntonyms') as FormArray;
  }

  addSynonym() {
    this.edSynonyms.push(new FormControl());
  }

  addAntonym() {
    this.edAntonyms.push(new FormControl());
  }
  ngOnInit() {
    console.log(this.edWord);
  }
  addWord() {
    console.log(this.wordForm.value);
  }
}
