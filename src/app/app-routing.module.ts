import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './components/list-client/list-client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { PageNotFoundComponent } from './partial/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guards';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full'  },
  { path: 'clients', component: ListClientComponent,canActivate: [AuthGuard] },
  { path: 'clients/create', component: AddClientComponent,canActivate: [AuthGuard] },
  { path: 'clients/:id', component: EditClientComponent,canActivate: [AuthGuard] },

  { path:"login", component: LoginComponent },
  { path:"register", component: RegisterComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
