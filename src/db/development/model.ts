import { CreateTableCommand, CreateTableInput } from "@aws-sdk/client-dynamodb";
import client from '../client';

const userTableParams: CreateTableInput = {
    TableName: 'DES_DESARROLLO',
    KeySchema: [
        { AttributeName: 'PK', KeyType: 'HASH'},
    ],
    AttributeDefinitions:[
        { AttributeName: 'PK', AttributeType: 'S'},
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 2,
        WriteCapacityUnits: 2,
    },
};

const command = new CreateTableCommand(userTableParams);
client.send(command).then((res) => {
    console.log(res);
}).catch(er => {
    console.log('Error al crear tabla:', er);
}) 