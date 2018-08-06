import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import * as fromUser from './user.reducer';
import { UserEffects } from './user.effects';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { FilterPipe } from './filter.pipe';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    FilterPipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forFeature('user', fromUser.reducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
