import { MongoClient } from "mongodb";
import { Resource } from "sst";

export const handler = async () => {
  const client = new MongoClient(Resource.MongoURL.value);
  await client.connect();
  const database = client.db("evse-list");
  const collection = database.collection("evses");
  const evses = await collection.find().toArray();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "List of EVSEs",
      data: evses,
    }),
  };
};
