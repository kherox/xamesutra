import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContractsComponent } from './contracts/contracts.component';
import { DepositsComponent } from './deposits/deposits.component';
import { TransfertsComponent } from './transferts/transferts.component';


import { AppRoutingModule } from './app.routing.module';
import { ContractEditComponent } from './contracts/contract-edit/contract-edit.component';
import { ContractItemComponent } from './contracts/contract-item/contract-item.component';
import { ContractListComponent } from './contracts/contract-list/contract-list.component';
import { ProductsComponent } from './products/products.component';
import { EntitiesComponent } from './entities/entities.component';
import { BodyHeaderComponent } from './body-header/body-header.component';
import { WalletComponent } from './wallet/wallet.component';
import { ProfileComponent } from './profile/profile.component';
import { DepositDetailComponent } from './deposits/deposit-detail/deposit-detail.component';
import { DepositListComponent } from './deposits/deposit-list/deposit-list.component';
import { DepositItemComponent } from './deposits/deposit-list/deposit-item/deposit-item.component';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { ContractDetailComponent } from './contracts/contract-detail/contract-detail.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    ContractsComponent,
    DepositsComponent,
    TransfertsComponent,
    ContractEditComponent,
    ContractItemComponent,
    ContractListComponent,
    ProductsComponent,
    EntitiesComponent,
    BodyHeaderComponent,
    WalletComponent,
    ProfileComponent,
    DepositDetailComponent,
    DepositListComponent,
    DepositItemComponent,
    ContractDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
