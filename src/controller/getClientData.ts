import type { VercelRequest, VercelResponse } from "@vercel/node";
import mongoose from "mongoose";

import { ClientData } from "../model/ClientData";

export const getClientData = async (
  request: VercelRequest,
  response: VercelResponse
) => {
  try {
    const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/test";
    await mongoose.connect(uri);

    const ip =
      request.headers["x-forwarded-for"] || request.socket.remoteAddress;

    const dataToSave = {
      time: new Date(),
      clientInfo: {
        ip,
      },
    };

    const clientData = new ClientData(dataToSave);
    await clientData.save();

    await mongoose.disconnect();
    return response.json({ status: "success" });
  } catch (error) {
    return response.status(400).json({ status: "error" });
  }
};
