import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CrudService } from 'src/app/crud.service';


@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {

  sede="";
  destino="";
  listado=[];

  constructor(private crud: CrudService,
              private toast: ToastController) { }

  ngOnInit() {
  }

  async buscar(txtKey:HTMLInputElement){
    const valor = await this.crud.rescatar(txtKey.value);
    
    if (valor != null) {
      this.sede = valor[0].Origen;
      this.destino = valor[0].Destino;
    } else {
      const toast = await this.toast.create({
        message: 'La entrada no fue encontrada',
        duration: 2000,
        color: "danger",
        position: "top",
      });
      toast.present();
    }
  }

  async delete(txtKey:HTMLInputElement){

    if (txtKey.value.trim().length == 0) {
      const toast = await this.toast.create({
        message: 'La entrada no fue especificada',
        duration: 2000,
        color: "danger",
        position: "top",
      });
      toast.present();
    }else{
      const valor = await this.crud.rescatar(txtKey.value);
      if (valor == null) {
        const toast = await this.toast.create({
          message: 'La entrada no fue encontrada',
          duration: 2000,
          color: "danger",
          position: "top",
        });
        toast.present();
      } else {
        this.crud.delete(txtKey.value)
      }
    }
    txtKey.value = "";
  }

  async list() {
    this.listado = this.crud.listar();
  }
}
