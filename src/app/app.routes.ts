import { Component } from '@angular/core';
import { Routes } from '@angular/router';

//component pages
import { HomeComponent } from './modules/portfolio/pages/home/home.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    //{ path: 'blog', component: BlogComponent },
];
