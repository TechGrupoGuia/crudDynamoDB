import { ScanCommand } from "@aws-sdk/client-dynamodb";
import { ScanCommandInput } from "@aws-sdk/lib-dynamodb";
import client from '../client';

const getDevelopments = async () => {
    const getDevelopmentParams: ScanCommandInput = {
        TableName: "DES_DESARROLLO",
    }

    const command = new ScanCommand(getDevelopmentParams);

    return await client.send(command);

};

export default getDevelopments;