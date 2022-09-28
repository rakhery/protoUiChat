import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UiChatComponent} from './ui-chat/ui-chat.component';

const routes: Routes = [
{
  path: 'ui-proto', component: UiChatComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
