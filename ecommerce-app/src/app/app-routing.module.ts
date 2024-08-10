import { NgModule, OnInit } from '@angular/core';
import { HomeLayoutComponent } from './core/components/layouts/home-layout/home-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './features/about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '' },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
    ],
  },

  // { path: 'error/:errorCode', component: ErrorPageComponent },
  // {
  //   path: '**',
  //   redirectTo: '/error/404',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
