import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './view/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';
import { AddItemFormComponent } from './components/add-item-form/add-item-form.component';
import { EditItemFormComponent } from './components/edit-item-form/edit-item-form.component';
import { DeleteItemFormComponent } from './components/delete-item-form/delete-item-form.component';
import { AddTagFormComponent } from './components/add-tag-form/add-tag-form.component';
import { EditTagFormComponent } from './components/edit-tag-form/edit-tag-form.component';
import { DeleteTagFormComponent } from './components/delete-tag-form/delete-tag-form.component';
import { AddStopFormComponent } from './components/add-stop-form/add-stop-form.component';
import { DeleteStopFormComponent } from './components/delete-stop-form/delete-stop-form.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  { 
    path: '', component: AdminComponent, pathMatch: 'full', data: {title: 'Administration'}, 
  },
  { 
    path: 'forgot', component: ForgotPasswordComponent, pathMatch: 'full', data: {title: 'Forgot Password'}, 
  }
];

@NgModule({
  declarations: [AdminComponent, LoginComponent, WrapperComponent, AddItemFormComponent, EditItemFormComponent, DeleteItemFormComponent, AddTagFormComponent, EditTagFormComponent, DeleteTagFormComponent, AddStopFormComponent, DeleteStopFormComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgbTabsetModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [ItemService]
})
export class AdminModule { }
