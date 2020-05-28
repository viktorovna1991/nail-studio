import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CurrentCountService {
  currentItemCount = new BehaviorSubject(0);

  // currentMessage = this.currentItemCount.asObservable();

  constructor() {
  }

  public updateItemCount(count: number) {
    this.currentItemCount.next(count);
  }

}
