import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  readonly dataList$ = new BehaviorSubject([]);

  constructor() { }
}
