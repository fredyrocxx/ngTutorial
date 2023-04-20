import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { ErrorDirective } from './error.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SqaureOfNumberPipe } from './AppPipes/sqaure-of-number.pipe';
import { ParentComponent } from './CommunicationComponents/parent/parent.component';
import { ChildComponent } from './CommunicationComponents/child/child.component';
import { VChildComponent } from './CommunicationComponents/ChildToParentViewChild/vchild/vchild.component';
import { VParentComponent } from './CommunicationComponents/ChildToParentViewChild/vparent/vparent.component';
import { OutputChildComponent } from './CommunicationComponents/ChildToParentOutputAndEventEmitter/output-child/output-child.component';
import { OutputParentComponent } from './CommunicationComponents/ChildToParentOutputAndEventEmitter/output-parent/output-parent.component';
import { OutputGrandKidComponent } from './CommunicationComponents/ChildToParentOutputAndEventEmitter/output-grand-kid/output-grand-kid.component';
import { OutputSiblingComponent } from './CommunicationComponents/ChildToParentOutputAndEventEmitter/output-sibling/output-sibling.component';
import { SParentComponent } from './CommunicationComponents/PassDataByService/sparent/sparent.component';
import { SChildComponent } from './CommunicationComponents/PassDataByService/schild/schild.component';
import { SSiblingComponent } from './CommunicationComponents/PassDataByService/ssibling/ssibling.component';
import { ReactiveDemoComponent } from './FormDemo/reactive-demo/reactive-demo.component';
import { TemplateDemoComponent } from './FormDemo/template-demo/template-demo.component';
import { EmployeeTemplateComponent } from './FormRevision/employee-template/employee-template.component';
import { EmployeeReactiveComponent } from './FormRevision/employee-reactive/employee-reactive.component';
import { EmpReactFmBuilderComponent } from './FormRevision/emp-react-fm-builder/emp-react-fm-builder.component';
import { HomeComponent } from './NavigationWithRouting/home/home.component';
import { UsersComponent } from './NavigationWithRouting/users/users.component';
import { ContactsComponent } from './NavigationWithRouting/contacts/contacts.component';
import { NotificationsComponent } from './ObservablesDemo/notifications/notifications.component';
import { AddEmployeeComponent } from './ObservablesDemo/add-employee/add-employee.component';
import {  FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CrudComponent } from './CrudDemo/crud/crud.component'


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    TwoWayDataBindingComponent,
    DirectiveDemoComponent,
    ErrorDirective,
    PipeDemoComponent,
    SqaureOfNumberPipe,
    ParentComponent,
    ChildComponent,
    VChildComponent,
    VParentComponent,
    OutputChildComponent,
    OutputParentComponent,
    OutputGrandKidComponent,
    OutputSiblingComponent,
    SParentComponent,
    SChildComponent,
    SSiblingComponent,
    ReactiveDemoComponent,
    TemplateDemoComponent,
    EmployeeTemplateComponent,
    EmployeeReactiveComponent,
    EmpReactFmBuilderComponent,
    HomeComponent,
    UsersComponent,
    ContactsComponent,
    NotificationsComponent,
    AddEmployeeComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
