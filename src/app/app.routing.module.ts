import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { ContractsComponent } from "./contracts/contracts.component";
import { DepositsComponent } from "./deposits/deposits.component";
import { TransfertsComponent } from "./transferts/transferts.component";
import { HomeComponent } from "./home/home.component";
import { ContractEditComponent } from "./contracts/contract-edit/contract-edit.component";
import { ContractItemComponent } from "./contracts/contract-item/contract-item.component";
import { ProductsComponent } from "./products/products.component";
import { EntitiesComponent } from "./entities/entities.component";
import { WalletComponent } from "./wallet/wallet.component";
import { ProfileComponent } from "./profile/profile.component";

const appRoutes : Routes = [
    {path : "" , component : HomeComponent},
    { path: "contract", component: ContractsComponent , children : [
        { path: ":id/edit", component: ContractEditComponent },
        {path : "item/:id",component : ContractItemComponent},
    ] },
    { path: "deposit", component: DepositsComponent },
    { path: "transfert", component: TransfertsComponent },
    { path: "product", component: ProductsComponent },
    { path: "entitie", component: EntitiesComponent },
    { path: "wallet", component: WalletComponent },
    {path : "profile",component : ProfileComponent},
];


@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports : [RouterModule]
})


export class AppRoutingModule {}