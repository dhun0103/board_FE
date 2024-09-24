import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NotificationDialogComponent } from './components/notification-dialog/notification-dialog.component';
import { MainComponent } from './components/main/main.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MainTopBarComponent } from './components/main-top-bar/main-top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent,
    PostCreateComponent,
    TopBarComponent,
    NotificationDialogComponent,
    MainComponent,
    FooterBarComponent,
    AboutUsComponent,
    ContactUsComponent,
    MainTopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
