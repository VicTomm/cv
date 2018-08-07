import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingComponent } from "./cv/landing/landing.component";
import { WorkComponent } from "./cv/work/work.component";

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'work', component: WorkComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}