import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeeklyMenuComponent } from './weekly-menu/weekly-menu.component';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ImagePipe } from './pipes/image.pipe';
import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    WeeklyMenuComponent,
    HomeComponent,
    RecipeComponent,
    ImagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
