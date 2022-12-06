import { model, Schema } from "mongoose";

interface IClientData {
  time: Date;
  clientInfo: IClientInfo;
}

interface IClientInfo {
  ip: string;
  hostname: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
  readme: string;
}

const clientDataSchema = new Schema<IClientData>({
  time: { type: Date, required: true },
  clientInfo: { type: Object, required: true },
});

export const ClientData = model<IClientData>("ClientData", clientDataSchema);
