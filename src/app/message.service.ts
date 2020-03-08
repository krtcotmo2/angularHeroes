import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  msg: string[] = ['Application Started'];

  addMessage(m: string) {
    this.msg.push(m);
  }

  clearMessages(arg:any = null) {
    this.msg = [];
  }
  constructor() { }

}
