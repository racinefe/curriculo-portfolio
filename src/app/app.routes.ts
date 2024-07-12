import { Component } from '@angular/core';
import { Routes } from '@angular/router';

//component pages
import { HomeComponent } from './modules/portfolio/pages/home/home.component';

export const routes: Routes = [
    {   
        path:'',
        component: HomeComponent,
    }
];
