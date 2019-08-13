import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from './modules/core/core.module';
import { LoginModule } from './modules/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { ToastrModule } from 'ngx-toastr';
import { MatTooltipModule, MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { DialogAguardeComponent } from './shared/dialogs/dialogAguarde/dialogAguarde.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogAguardeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    LoginModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-position',
      closeButton: true
    }),
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  entryComponents: [
    DialogAguardeComponent
  ],
  exports: [
    CoreModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
