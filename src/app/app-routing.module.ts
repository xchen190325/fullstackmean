import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppNewsComponent } from './news/news.component';
import { AuthTwoComponent } from './auth/auth2.component';
import { CommentCreateComponent } from './news/comments/comment-create/comment-create.component' 
const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'news', component: AppNewsComponent },
  { path: 'login', component: AuthComponent },
  { path: 'authtwo', component: AuthTwoComponent },
  {path: 'post', component:CommentCreateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
