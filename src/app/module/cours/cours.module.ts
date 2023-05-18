import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { CoursComponent } from './cours.component';
import { CoursListComponent } from 'src/app/pages/cours/cours-list/cours-list.component';
import { CoursShowComponent } from 'src/app/pages/cours/cours-show/cours-show.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    CoursComponent,
    CoursListComponent,
    CoursShowComponent,
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    PdfViewerModule,
    NzModalModule,
    NzButtonModule,
    NgbModule,
    NzSelectModule,
    NzInputModule,
    NzPaginationModule,
    FormsModule,
    FilterPipeModule
  ]
})
export class CoursModule { }
