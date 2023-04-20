import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './CrudDemo/crud/crud.component';
import { EmployeeReactiveComponent } from './FormRevision/employee-reactive/employee-reactive.component';
import { TemplateDemoComponent } from './FormDemo/template-demo/template-demo.component';


const routes: Routes = [{ path: '', component: EmployeeReactiveComponent },
{ path: 'employee', component: CrudComponent },
{path: 'employeeTemplate', component:TemplateDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
