import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { get } from 'http';
import { DevelopmentService } from './development.service';

@Controller('development')
export class DevelopmentController{
    constructor(private readonly developmentservice: DevelopmentService){}

    @Get()
    getDevelopmentHello(){
        return 'Hello';
    }

    @Post()
    insertDevelopment(
        @Body('Nombre') Nombre: string,
        @Body('tipo_inventario') tipo_inventario: string,
        @Body('idDesarrolloAVI') idDesarrolloAVI: string,
        @Body('director') director: string,
        @Body('latitud') latitud: string,
        @Body('coordinadora') coordinadora: string,
        @Body('zona') zona: string,
        @Body('descripcion') descripcion: string,
        @Body('desarrollador') desarrollador: string,
        @Body('proyecto') proyecto: string,
       // @Body('') ubicacion: Map,
        @Body('amenidades') amenidades: string,
        @Body('clave') clave: string,
        @Body('udn') udn: string,
        @Body('estatus_desarrollo') estatus_desarrollo: string,
        @Body('longitud') longitud: string,
        @Body('gerente') gerente: string
    ){
        const develop = this.developmentservice.insertDevelopment(Nombre, tipo_inventario, idDesarrolloAVI, director, latitud, coordinadora, zona, descripcion, desarrollador, proyecto, amenidades, clave, udn, estatus_desarrollo, longitud, gerente);
        return {
            idDesarrollo: develop,
        }
    }

    @Get()
    getDevelopments(){
        this.developmentservice.getDevelopments();
    }

    @Get('idDesarrollo')
    getDevelopment(@Param('idDesarrollo') idDesarrollo: string){
        return this.developmentservice.getDevelopment(idDesarrollo);
    }

    @Delete(':idDevelopmet')
    deleteDevelopment(@Param('idDevelopment') idDevelopment:string){
        this.developmentservice.deleteDevelopment(idDevelopment);
    }

    @Put(':idDevelopment')
    updateDevelopment(
        @Param('idDevelopment') idDevelopment:string,
        @Body('Nombre') Nombre: string,
        @Body('tipo_inventario') tipo_inventario: string,
        @Body('idDesarrolloAVI') idDesarrolloAVI: string,
        @Body('director') director: string,
        @Body('latitud') latitud: string,
        @Body('coordinadora') coordinadora: string,
        @Body('zona') zona: string,
        @Body('descripcion') descripcion: string,
        @Body('desarrollador') desarrollador: string,
        @Body('proyecto') proyecto: string,
       // @Body('') ubicacion: Map,
        @Body('amenidades') amenidades: string,
        @Body('clave') clave: string,
        @Body('udn') udn: string,
        @Body('estatus_desarrollo') estatus_desarrollo: string,
        @Body('longitud') longitud: string,
        @Body('gerente') gerente: string
    ){
        return this.developmentservice.updateDevelopment(idDevelopment, Nombre,
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
    }


    

}