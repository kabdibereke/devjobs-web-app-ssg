// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "GET") {
		const data = fs.readFileSync("./data.json");
		const jsonData = JSON.parse(data.toString());

		res.status(200).json(jsonData);
	}
}
