import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getAllMessages(){
    return [
      {'author':'person1', text:'text1'},
      {'author':'person2', text:'text2'},
      {'author':'person3', text:'text3'},
      {'author':'person4', text:'text4'}
    ]
  }
}
