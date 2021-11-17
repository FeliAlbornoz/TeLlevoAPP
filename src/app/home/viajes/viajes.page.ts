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
      if (valor[0].Origen = 1) {
        this.sede = "Sede Alameda";
      } else if (valor[0].Origen = 2) {
        this.sede = "Sede Antonio Varas";
      } else if (valor[0].Origen = 3) {
        this.sede = "Sede Educación coninua";
      } else if (valor[0].Origen = 4) {
        this.sede = "Sede Maipú";
      } else if (valor[0].Origen = 5) {
        this.sede = "Sede Melipilla";
      } else if (valor[0].Origen = 6) {
        this.sede = "Sede Padre Alonso de Ovalle";
      } else if (valor[0].Origen = 7) {
        this.sede = "Sede Plaza Norte";
      } else if (valor[0].Origen = 8) {
        this.sede = "Sede Plaza Oeste";
      } else if (valor[0].Origen = 9) {
        this.sede = "Sede Plaza Vespucio";
      } else if (valor[0].Origen = 10) {
        this.sede = "Sede Puente Alto";
      } else if (valor[0].Origen = 11) {
        this.sede = "Sede San Bernardo";
      } else if (valor[0].Origen = 12) {
        this.sede = "Sede San Carlos de Apoquindo";
      } else if (valor[0].Origen = 13) {
        this.sede = "Sede San Joaquín";
      }

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
