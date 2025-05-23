import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IAmLazyComponent } from './components/i-am-lazy/i-am-lazy.component';

const LAZY_ROUTES: Routes = [
  {
    path: '', // http://localhost:4200/lazy
    component: IAmLazyComponent,
  },
];

@NgModule({
  declarations: [IAmLazyComponent],
  imports: [CommonModule, RouterModule.forChild(LAZY_ROUTES)],
})
export class LazyModule {}
