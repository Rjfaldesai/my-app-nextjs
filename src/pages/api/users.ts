// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from "next";

let users = ["Alice", "Bob", "Charlie", "Jason"];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
 if (req.method === "GET") {
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    const { name } = req.body;
    if (!name || typeof name !== "string") {
      return res.status(400).json({ error: "Name is required" });
    }
    users.push(name);
    return res.status(201).json({ success: true, users });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}

