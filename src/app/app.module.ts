import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalComponent } from './signal/signal.component';
import { ComputedSignalImplComponent } from './computed-signal-impl/computed-signal-impl.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalComponent,
    ComputedSignalImplComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
