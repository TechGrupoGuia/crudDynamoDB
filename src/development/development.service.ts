import { Injectable } from "@nestjs/common";
import putDevelopment from "src/db/development/putDevelopment";
import getDevelopments from "src/db/development/getDevelopments";
import getDevelopment from "src/db/development/getDevelopment";
import deleteDevelopment from "src/db/development/deleteDevelopment";
import { Development } from "./development.model";

@Injectable()
export class DevelopmentService{
    //private development: Development[] = [];

    insertDevelopment(
         Nombre: string,
         tipo_inventario: string,
         idDesarrolloAVI: string,
         director: string,
         latitud: string,
         coordinadora: string,
         zona: string,
         descripcion: string,
         desarrollador: string,
         proyecto: string,
        // ubicacion: Map,
         amenidades: string,
         clave: string,
         udn: string,
         estatus_desarrollo: string,
         longitud: string,
         gerente: string) 
         {

             var idNewDesarrollo;
             var uuid = require("uuid");

             idNewDesarrollo = uuid.v1().toString();

             const newDevelopment = new Development(idNewDesarrollo, Nombre,
                tipo_inventario,
                idDesarrolloAVI,
                director,
                latitud,
                coordinadora,
                zona,
                descripcion,
                desarrollador,
                proyecto,
               // ubicacion,
                amenidades,
                clave,
                udn,
                estatus_desarrollo,
                longitud,
                gerente);

            putDevelopment(newDevelopment);
            //this.development.push(newDevelopment);

            return idNewDesarrollo;

         }

         async getDevelopments(){
            return await getDevelopments(); 
            //return [... this.development];
         }

         async getDevelopment(id:string){
             return await getDevelopment(id);
             //return this.getDevelopmentById(id)[0];
         }

         updateDevelopment(
            idDesarrollo: string,
            Nombre: string,
            tipo_inventario: string,
            idDesarrolloAVI: string,
            director: string,
            latitud: string,
            coordinadora: string,
            zona: string,
            descripcion: string,
            desarrollador: string,
            proyecto: string,
           // ubicacion: Map,
            amenidades: string,
            clave: string,
            udn: string,
            estatus_desarrollo: string,
            longitud: string,
            gerente: string
         ){
             //const [targetDevelopment, index] = this.getDevelopmentById(idDesarrollo)[0];
             /*const nuParam = {...targetDevelopment, Nombre, tipo_inventario,
                idDesarrolloAVI,
                director,
                latitud,
                coordinadora,
                zona,
                descripcion,
                desarrollador,
                proyecto,
               // ubicacion,
                amenidades,
                clave,
                udn,
                estatus_desarrollo,
                longitud,
                gerente };*/

            const newDevelopment = new Development(idDesarrollo, Nombre, tipo_inventario, idDesarrolloAVI, director, latitud, coordinadora, zona, descripcion, desarrollador, proyecto, '', clave, udn, estatus_desarrollo, longitud, gerente);

            //this.development[index] = newDevelopment;
            putDevelopment(newDevelopment);

            return newDevelopment;

         }

         deleteDevelopment(idDevelopment: string){
             //const [_, index] = this.getDevelopmentById(idDevelopment);
             //this.development.splice(index, 1);
             return deleteDevelopment(idDevelopment);
         }

         /*private getDevelopmentById(idDevelopment: string) : [Development, number] {
             const index = this.development.findIndex((U) => U.idDesarrollo === idDevelopment);
            return [this.development[index], index];
         }*/
}