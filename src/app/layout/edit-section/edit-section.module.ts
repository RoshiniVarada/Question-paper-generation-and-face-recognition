import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSectionRoutingModule } from './new-user-routing.module';
import { EditSectionComponent } from './new-user.component';
import { PageHeaderModule } from './../../shared/modules';

@NgModule({
    imports: [CommonModule, EditSectionRoutingModule, PageHeaderModule],
    declarations: [NewUserComponent]
})
export class[EditSectionModule {}
