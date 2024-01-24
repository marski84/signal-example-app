import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignalComponent} from "./signal/signal.component";
import {ComputedSignalImplComponent} from "./computed-signal-impl/computed-signal-impl.component";

const routes: Routes = [
  {
    path: '', component: SignalComponent
  },
  {
    path: 'computed-example-impl', component: ComputedSignalImplComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
