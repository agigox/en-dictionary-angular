import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  words: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.words = db.collection('words').valueChanges();
  }

}
