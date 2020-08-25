import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppNewsComponent } from './news/news.component';


const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'news', component: AppNewsComponent },
  { path: 'login', component: AuthComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
