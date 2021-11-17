import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children:[
      {
        path:'',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)

      },{
        path: 'inicio',
        loadChildren:() => import('./home/inicio/inicio.module').then (m => m.InicioPageModule)
      },
      {
        path:'viajes',
        loadChildren: () => import('./home/viajes/viajes.module').then (m => m.ViajesPageModule)
      },
      {
        path:'detalle',
        loadChildren:() => import('./home/viajes/detalle/detalle.module').then( m => m.DetallePageModule)
      }
    ]
  },
  {
    path: 'login',
    children:[
      {
        path:'',
        loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)

      },{
        
        path:':restablecercc',
        loadChildren: () => import('./login/restablecercc/restablecercc.module').then (m => m.RestablecerccPageModule)

      }
    ]
    
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
