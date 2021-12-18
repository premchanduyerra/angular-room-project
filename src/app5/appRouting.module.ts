import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGaurd } from "./auth-gaurd.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ServerResolver } from "./serverResolver.service";
import { CanDeactivateGaurd } from "./servers/edit-server/can-component-deactivate-gaurd.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoots:Routes=[
    {path:'',component:HomeComponent},
    {path:'user',component:UsersComponent,children:[
               {path:':id/:name',component:UserComponent},
    ]},
    
    {path:'server',canActivateChild:[AuthGaurd],component:ServersComponent,
            children:[
                         {path:':id/edit',component:EditServerComponent,canDeactivate:[CanDeactivateGaurd]},
                         {path:':id',component:ServerComponent,resolve:{server:ServerResolver}},
                    ]
    },
    // {path:'page-not-found',component:PageNotFoundComponent},
    {path:'page-not-found',component:ErrorPageComponent,data:{message:"page not found"}},
    {path:"**",redirectTo:'page-not-found'}
    ]




@NgModule({

    imports:[
        RouterModule.forRoot(appRoots,{useHash:true})
    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule{

}