import { NextApiRequest, NextApiResponse } from 'next';

// Handler for fetching user data by ID
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query; // Extract the ID from the query params

  try {
    // Fetch data from your local API at localhost:4000/users/:id
    const response = await fetch(`http://localhost:4000/users/${id}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch data' });
    }

    const data = await response.json(); // Parse the response as JSON

    // Send the data back to the client
    res.status(200).json(data);
  } catch (error) {
    // Error handling
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
