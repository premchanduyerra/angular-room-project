import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    UnlessDirective,
      AppComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
