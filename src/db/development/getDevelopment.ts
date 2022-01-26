import { GetCommand, GetCommandInput } from "@aws-sdk/";
import client from '../client';
import { Development } from '../../development/development.model';

const getDevelopment = async (id: string) => {
    const getDevelopmentParams: GetCommandInput = {
        TableName: "DES_DESARROLLO",
        key: {
            PK: id,
        },
    }

    const command = new GetCommand(getDevelopmentParams);

    return await client.send(command);

};

export default getDevelopment;