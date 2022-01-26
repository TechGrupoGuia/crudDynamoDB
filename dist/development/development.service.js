"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopmentService = void 0;
const common_1 = require("@nestjs/common");
const development_model_1 = require("./development.model");
let DevelopmentService = class DevelopmentService {
    constructor() {
        this.development = [];
    }
    insertDevelopment(Nombre, tipo_inventario, idDesarrolloAVI, director, latitud, coordinadora, zona, descripcion, desarrollador, proyecto, amenidades, clave, udn, estatus_desarrollo, longitud, gerente) {
        var idNewDesarrollo;
        var uuid = require("uuid");
        idNewDesarrollo = uuid.v1().toString();
        const newDevelopment = new development_model_1.Development(idNewDesarrollo, Nombre, tipo_inventario, idDesarrolloAVI, director, latitud, coordinadora, zona, descripcion, desarrollador, proyecto, amenidades, clave, udn, estatus_desarrollo, longitud, gerente);
        this.development.push(newDevelopment);
        return idNewDesarrollo;
    }
};
DevelopmentService = __decorate([
    (0, common_1.Injectable)()
], DevelopmentService);
exports.DevelopmentService = DevelopmentService;
//# sourceMappingURL=development.service.js.map