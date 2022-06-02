import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { ShowPplComponent } from './people/show-ppl/show-ppl.component';
import { EditPplComponent } from './people/edit-ppl/edit-ppl.component';

import { SharedService } from './shared.service'; // Added service name

import { HttpClientModule } from '@angular/common/http'; // Added http client module
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; // Added Form module

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    ShowPplComponent,
    EditPplComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService], // Added SharedService 
  bootstrap: [AppComponent]
})
export class AppModule { }
