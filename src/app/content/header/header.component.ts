import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isSidePanelOpen = false;
  routerSubscription: Subscription = new Subscription();

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isSidePanelOpen = false;
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 710) {
      this.closeSidePanel();
    }
  }

  toggleSidePanel() {
    this.isSidePanelOpen = !this.isSidePanelOpen;
  }

  @HostListener('document:keydown.escape')
  closeSidePanel() {
    this.isSidePanelOpen = false;
  }
}
