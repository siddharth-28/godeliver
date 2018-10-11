import { TimeslotsComponent } from './timeslots /timeslots.component';
import { HttpModule } from "@angular/http";
import { BillingComponent } from "./billing/billing.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { HomeComponent } from "./home/home.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UserDetailsService } from "./user-details.service";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { RoutingModule } from "./routing/routing.module";
import { MultipleCheckboxesModule } from "multiple-checkboxes";
import { RecommendationsComponent } from "./recommendations/recommendations.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { AuthenticationService } from "./services/authentication.service";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { JwtInterceptor } from "./interceptors/jwt.interceptor";
import { MaterialModule } from "./material";
import { MatStepperModule } from "@angular/material/stepper";
import { OrderService } from "./order.service";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule
} from "@angular/material";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ServicepageComponent } from "./servicepage/servicepage.component";
import { ReturnpolicyComponent } from "./returnpolicy/returnpolicy.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ProfileComponent } from "./profile/profile.component";
import { OrdersComponent } from "./orders/orders.component";
import { CartComponent } from "./cart/cart.component";
import { BookComponent } from "./book/book.component";
import { CardsComponent } from "./cards/cards.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule, MatToolbarModule } from "@angular/material";
import { FirebaseService } from "./firebase.service";
import { AllComponent } from "./all/all.component";
import { NgxPaginationModule } from "ngx-pagination";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./auth.guard";
import { SettingsComponent } from "./settings/settings.component";
import { DeleteaccountComponent } from "./deleteaccount/deleteaccount.component";
import { AgmCoreModule } from "@agm/core"; // @agm/core
import { AgmDirectionModule } from "agm-direction";
import { DeliveryCardComponent } from "./delivery-card/delivery-card.component";
import { PaymentComponent } from "./payment/payment.component";
import { AdminService } from './admin.service';
import { ChartsModule } from 'ng2-charts';
import { TopsellingComponent } from './topselling/topselling.component';
import { TopratedComponent } from './toprated/toprated.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SearchComponent } from './search/search.component';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RecommendationsComponent,
    WishlistComponent,
    ServicepageComponent,
    ReturnpolicyComponent,
    AboutusComponent,
    ProfileComponent,
    OrdersComponent,
    CartComponent,
    BookComponent,
    CardsComponent,
    BillingComponent,
    AllComponent,
    AdminComponent,
    SettingsComponent,
    TimeslotsComponent,
    DeleteaccountComponent,
    DeliveryCardComponent,
    PaymentComponent,
    TopsellingComponent,
    TopratedComponent,
    SnackbarComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule,
    MultipleCheckboxesModule,
    MatDividerModule,
    MatListModule,
    ReactiveFormsModule,
    MaterialModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatExpansionModule,
    AngularFireModule.initializeApp(environment.firebase, "godeliverfrontend"),
    AngularFirestoreModule,
    NgxPaginationModule,
    MatStepperModule,
    NgxSpinnerModule,
    HttpModule,
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      // @agm/core
      apiKey: 'AIzaSyDe2QqXrbtaORvL-I0WHpiI72HxtfTz5Zo'
    }),
    AgmDirectionModule, // agm-direction,
    ChartsModule
  ],
  providers: [
    FirebaseService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    UserDetailsService, OrderService,
    AuthGuard, AdminService
  ],
  bootstrap: [AppComponent],
  entryComponents: [SnackbarComponent]
})
export class AppModule {
  HttpModule;
}
