import { model, Schema } from "mongoose";

interface IClientData {
  time: Date;
  clientInfo: IClientInfo;
}

interface IClientInfo {
  ip: string;
}

const clientDataSchema = new Schema<IClientData>({
  time: { type: Date, required: true },
  clientInfo: { type: Object, required: true },
});

export const ClientData = model<IClientData>("ClientData", clientDataSchema);
