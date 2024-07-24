import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private readonly _show = new BehaviorSubject<boolean>(false);
  readonly show$ = this._show.asObservable();

  get show(): boolean {
    return this._show.getValue();
  }
  
  set show(show: boolean) {  
    this._show.next(show);
  }
}