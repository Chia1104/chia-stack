import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

const API_KEY = process.env.API_KEY;

const cors = Cors({
  methods: ["GET", "POST", "PUT", "DELETE"],
  origin: "*",
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);
  switch (req.method) {
    case "GET":
      try {
        const respond = await fetch("https://crudapi.co.uk/api/v1/task", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        const data = await respond.json();
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
      }
    case "POST":
      try {
        const respond = await fetch("https://crudapi.co.uk/api/v1/task", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify(req.body),
        });
        const data = await respond.json();
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
      }
    case "PUT":
      try {
        const respond = await fetch("https://crudapi.co.uk/api/v1/task", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify(req.body),
        });
        const data = await respond.json();
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
      }
    case "DELETE":
      try {
        const respond = await fetch("https://crudapi.co.uk/api/v1/task", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify(req.body),
        });
        const data = await respond.json();
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
      }
    default:
      return res.status(405).json({ error: "Method not allowed" });
  }
}
