import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component'
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AppNewsComponent } from './news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { matMenuAnimations, MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { CommentCreateComponent } from './news/comments/comment-create/comment-create.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommentListComponent } from './news/comments/comment-list/comment-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { PostCreateComponent } from './news/posts/post-create/post-create.component';
import { PostListComponent } from './news/posts/post-list/post-list.component';
import { SmsSendComponent } from './sms-send/sms-send.component'
import { DialogOverviewExampleDialog } from './sms-send/sms-send.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserpageComponent } from './userpage/userpage.component';
import { ImageComponent } from './userpage/image/image.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    UserpageComponent,
    SmsSendComponent,
    PostListComponent,
    DropdownDirective,
    AuthComponent,
    DialogOverviewExampleDialog,
    LoadingSpinnerComponent,
    AppNewsComponent,
    CommentCreateComponent,
    CommentListComponent,
    PostCreateComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatToolbarModule
    
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule {}
