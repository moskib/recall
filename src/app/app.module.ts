import { QuotesService } from './services/quotes.service';
// Modules:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Components:
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { TopicsComponent } from './topics/topics.component';
import { AuthorComponent } from './authors/author/author.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Services:
import { AuthorService } from './services/author.service';

// Other:
import { environment } from './../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AuthorsComponent,
    TopicsComponent,
    NotFoundComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'authors/:author',
        component: AuthorComponent
      },
      {
        path: 'authors',
        component: AuthorsComponent
      },
      {
        path: 'topics',
        component: TopicsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    AuthorService,
    QuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
