import { UploadService } from './common/services/upload-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnSideMenuComponent } from './an-side-menu/an-side-menu.component';
import { AnBtnBurgerComponent } from './an-btn-burger/an-btn-burger.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileManagerComponent } from './profile-manager/profile-manager.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WordsManagerComponent } from './words-manager/words-manager.component';
import { PhrasesManagerComponent } from './phrases-manager/phrases-manager.component';
import { ConstantsManagerComponent } from './constants-manager/constants-manager.component';
import { FileDropDirective } from './file-drop.directive';
import { AnProgressComponent } from './an-progress/an-progress.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { AnTableComponent } from './an-table/an-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AnSideMenuComponent,
    AnBtnBurgerComponent,
    HomeComponent,
    ProfileManagerComponent,
    NavbarComponent,
    WordsManagerComponent,
    PhrasesManagerComponent,
    ConstantsManagerComponent,
    FileDropDirective,
    AnProgressComponent,
    FileUploadComponent,
    MultiSelectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'manage-profiles',
        component: ProfileManagerComponent
      },
      {
        path: 'manage-phrases',
        component: PhrasesManagerComponent
      },
      {
        path: 'manage-words',
        component: WordsManagerComponent
      },
      {
        path: 'manage-constants',
        component: ConstantsManagerComponent
      },
      {
        path: '**',
        component: HomeComponent
      }
    ])
  ],
  providers: [
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }