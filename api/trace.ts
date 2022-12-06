import type { VercelRequest, VercelResponse } from "@vercel/node";

import { getClientData } from "../src/controller/getClientData";

export default function (request: VercelRequest, response: VercelResponse) {
  return getClientData(request, response);
}
