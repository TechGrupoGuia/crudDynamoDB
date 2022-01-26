import { PutCommand, PutCommandInput } from "@aws-sdk/lib-dynamodb";
import { Development } from "src/development/development.model";
import client from '../client';

const putDevelopment = (development: Development) => {
    const putDevelopmentParam: PutCommandInput = {
        TableName: 'DES_DESARROLLO',
        Item: {
            PK: "idDesarrollo",
            Nombre: development.Nombre,
            amenidades: development.amenidades,
            clave: development.clave,
            coordinadora: development.coordinadora,
            desarrollador: development.desarrollador,
            descripcion: development.descripcion,
            //Agregar el resto de campos
        },
    };

    const command = new PutCommand(putDevelopmentParam);
    return client.send(command);
};

export default putDevelopment;
