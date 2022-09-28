import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-chat',
  templateUrl: './ui-chat.component.html',
  styleUrls: ['./ui-chat.component.scss']
})
export class UiChatComponent implements OnInit {
  public message: any;

  constructor() { }

  ngOnInit(): void {
  }

}
