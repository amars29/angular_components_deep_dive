import { NgIf } from '@angular/common';
import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [NgIf],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private interval?: ReturnType<typeof setInterval>;

  // If you don't want to use the ngOnDestroy lifecycle hooks, you can use the destryRef instead:
  private destroyRef = inject(DestroyRef);

  // constructor() {
  //   setInterval(() => {
  //     const rnd = Math.random();
  //     this.currentStatus =
  //       rnd < 0.5 ? 'online' : rnd < 0.9 ? 'offline' : 'unknown';
  //   }, 5000);
  // }

  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random();
      this.currentStatus =
        rnd < 0.5 ? 'online' : rnd < 0.9 ? 'offline' : 'unknown';
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(this.interval);
    });
  }

  // ngOnDestroy() {
  //   if (this.interval) {
  //     clearInterval(this.interval);
  //   }
  // }
}
