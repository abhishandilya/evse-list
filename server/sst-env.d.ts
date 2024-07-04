import "sst"
declare module "sst" {
  export interface Resource {
    MongoURL: {
      type: "sst.sst.Secret"
      value: string
    }
  }
}
export {}