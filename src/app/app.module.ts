import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { ManagementComponent } from './admin/management/management.component';
import { MembersComponent } from './admin/members/members.component';
import { BooksComponent } from './admin/books/books.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { BookissueComponent } from './librarian/bookissue/bookissue.component';
import { BookreturnComponent } from './librarian/bookreturn/bookreturn.component';
import { SearchComponent } from './librarian/search/search.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { MembersEditComponent } from './admin/members/members-edit/members-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    ManagementComponent,
    MembersComponent,
    BooksComponent,
    LibrarianComponent,
    BookissueComponent,
    BookreturnComponent,
    SearchComponent,
    DropdownDirective,
    MembersEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
