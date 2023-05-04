import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenerComponent } from './opener/opener.component';
import { StartScreenComponent } from './start-screen/start-screen.component';

const routes: Routes = [{ path: '', redirectTo: 'start-screen', pathMatch: 'full' },
{ path: 'start-screen', component: StartScreenComponent },
{ path: ":id", component: OpenerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
