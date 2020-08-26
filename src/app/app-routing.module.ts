import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppNewsComponent } from './news/news.component';
import { CommentCreateComponent } from './news/comments/comment-create/comment-create.component'
import { SmsSendComponent } from './sms-send/sms-send.component' 
const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'news', component: AppNewsComponent },
  { path: 'login', component: AuthComponent },
  { path: 'post', component: CommentCreateComponent },
  { path: 'sms', component:SmsSendComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
