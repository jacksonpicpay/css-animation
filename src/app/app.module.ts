import { LoginAnimatedModule } from './login-animated/login-animated.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { ListSocialMediaModule } from './list-social-media/list-social-media.module';
import { TextRollModule } from './text-roll/text-roll.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ListSocialMediaModule,
    TextRollModule,
    LoginAnimatedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
