import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  wordForm = this.formBuilder.group({
    edWord: ['', Validators.required],
    edMeaning: [''],
    edWordClass: [''],
    edPronounciations: this.formBuilder.group({
      edIpa: [''],
      edEnglishPronounciation: [''],
      edBritishPronounciation: ['']
    }),
    edSynonyms: this.formBuilder.array([
      this.formBuilder.control('')
    ]),
    edAntonyms: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  get edSynonyms() {
    return this.wordForm.get('edSynonyms') as FormArray;
  }
  get edAntonyms() {
    return this.wordForm.get('edAntonyms') as FormArray;
  }

  addSynonym() {
    this.edSynonyms.push(this.formBuilder.control(''));
  }

  addAntonym() {
    this.edAntonyms.push(this.formBuilder.control(''));
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  addWord() {
    console.log(this.wordForm.value);
  }
}
