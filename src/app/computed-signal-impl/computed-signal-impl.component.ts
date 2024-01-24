import {Component, computed, effect, signal} from '@angular/core';

@Component({
  selector: 'app-computed-signal-impl',
  templateUrl: './computed-signal-impl.component.html',
  styleUrls: ['./computed-signal-impl.component.css']
})
export class ComputedSignalImplComponent {
   clicked: boolean;

   private effectRef = effect(
     () => {
       if (this.counter()) {
         console.log('i will be destroyed on manual cleanup!')
       }
     }, {
      manualCleanup: true
     }
   )

  stopEffect() {
    console.log('STOP EFFECT CALLED')
     this.effectRef.destroy();
  }

  constructor() {
    this.clicked = false;
  effect((onCleanup) => {
    if (this.counter() && this.clicked) {
      console.log('effect on click')
    }

      onCleanup(() => console.log('i run on cleanup' + ' ' + this.counter()))
  }


  )}






  counter = signal(0)

  incerement() {
    this.counter.update((count) => count + 1)
  };
  decerement() {
    this.counter.update((count) => count - 1)
  };

  doubleCount = computed(
    () => this.counter() * 2,
    {
      equal: (a, b) => {
  return a === b
}
    });
}
