import {Component, computed, inject, OnInit, Signal, signal} from '@angular/core';
import {SignalService} from "./signal.service";
import {immediateProvider} from "rxjs/internal/scheduler/immediateProvider";
import {delay, Observable, of} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";

function getSomeData(): Observable<number[]> {
    return of([1, 2, 3, 4, 5])
        .pipe(
            delay(3000)
        )
}


@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent implements OnInit {
    signalStoreService = inject(SignalService);

  exampleSignal = signal('example one');

  exampleComputedSignalSource= signal('example signal to compute');
  computedSignalResult = computed(() => this.exampleComputedSignalSource() + ' after computation');

  // raise NG0600 error
  // errorRaisingComputedSignal = computed(() => this.exampleComputedSignalSource.update(() => ''))

  lazySignalExample= signal(`i am lazy`);

  dataWithAsyncPipe = getSomeData();
  dataHandledWithSignal = toSignal(getSomeData())





  constructor() {
      console.log(this.lazySignalExample());
      this.lazySignalExample.set('maybe not so lazy?');
  }
    ngOnInit(): void {
   }

    setValue() {
     this.exampleSignal.set('new value');
   }

   updateValue(newValue: string) {
        this.exampleSignal.update(value => value + ' ' + newValue)
   }

    addItem() {
      this.signalStoreService.addItem(
          {
              id: new Date().toString(),
              name: 'new Item',
              description: 'great new item'
          }
      )
    }



    readValue(value: Signal<string>) {
    //  no set or update
    }


    protected readonly immediateProvider = immediateProvider;
}
