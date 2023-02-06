import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.API_KEY;

export default async function (req: NextApiRequest, res: NextApiResponse) {
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
        return res.status(500).json({ error: error.message });
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
        return res.status(500).json({ error: error.message });
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
        return res.status(500).json({ error: error.message });
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
        return res.status(500).json({ error: error.message });
      }
    default:
      return res.status(405).json({ error: "Method not allowed" });
  }
}
