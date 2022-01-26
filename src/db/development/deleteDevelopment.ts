import { GetCommand, GetCommandInput } from "@aws-sdk/";
import client from '../client';
import { Development } from '../../development/development.model';

const deleteDevelopment = async (id: string) => {
    const deleteDevelopmentParams: GetCommandInput = {
        TableName: "DES_DESARROLLO",
        key: {
            PK: id,
        },
    }

    const command = new GetCommand(deleteDevelopmentParams);

    return await client.send(command);

};

export default deleteDevelopment;