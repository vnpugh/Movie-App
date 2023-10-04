import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "../homepage/homepage.component";
// import { RegistrationComponent }
import { LoginComponent } from "../login/login.component";
import { MoviecollectionComponent } from "../moviecollection/moviecollection.component";
import { MovieplatformComponent } from "../movieplatform/movieplatform.component";
// import { Mylists}
// {HomeGridComponent} custom component

// https://angular.io/guide/router#displaying-a-404-page
// Documentation for using router
const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '', component: HomepageComponent,
    
    children:[
    //   {path: 'mylists/:mylistId', component: MylistsComponent, pathMatch:'full' },
    //   {path: 'home', component: HomeGridComponent }]},
      { path: '', redirectTo: 'learn', pathMatch: 'full' },
      { path: 'collections', component: MoviecollectionComponent },
      { path: 'platforms', component: MovieplatformComponent },
    // { path: 'register', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
  ],
},
  ];
  
  // the router should reload the component when navigating to the same URL
  @NgModule({ 
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule],
  })
  export class RoutingModule {}