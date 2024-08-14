import { NgModule, OnInit } from '@angular/core';
import { HomeLayoutComponent } from './core/components/layouts/home-layout/home-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
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
