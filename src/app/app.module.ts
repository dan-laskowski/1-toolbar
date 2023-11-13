import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NgOptimizedImage } from '@angular/common';
import { ToolbarLinkComponent } from './components/toolbar-link/toolbar-link.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, ToolbarLinkComponent],
  imports: [BrowserModule, AppRoutingModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
