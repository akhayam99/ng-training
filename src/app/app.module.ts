import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContentComponent } from './layout/content/content.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AppRoutingModule } from './router/router.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ContentComponent,
    HttpClientModule,
    SidebarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
