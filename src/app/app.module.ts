import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routing/routes';
import { MatTabsModule } from '@angular/material/tabs';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CookieService } from 'ngx-cookie-service';
import { AuthPageComponent } from "./modules/auth/components/auth-page/auth-page.component";
import { FormFieldComponent } from "./modules/shared/components/form-field/form-field.component";
import { HeaderComponent } from "./modules/main/components/header/header.component";
import { RightSidePanelComponent } from "./modules/main/components/right-side-panel/right-side-panel.component";
import { LoginComponent } from "./modules/auth/components/login/login.component";
import { MenuComponent } from "./modules/main/components/menu/menu.component";
import { LayoutComponent } from "./modules/main/components/layout/layout.component";
import { SignUpComponent } from "./modules/auth/components/sign-up/sign-up.component";
import { ProfileComponent } from "./modules/main/components/profile/profile.component";
import { CsrfInterceptor } from "./modules/main/interseptor/csrf-interceptor.service";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { VkLoggedInComponent } from './modules/auth/components/vk-logged-in/vk-logged-in.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    FormFieldComponent,
    HeaderComponent,
    LayoutComponent,
    LoginComponent,
    MenuComponent,
    SignUpComponent,
    RightSidePanelComponent,
    ProfileComponent,
    VkLoggedInComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTabsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CsrfInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
