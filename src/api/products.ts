import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
   
    const products = [
      { id: 1, name: 'Product 1', price: 10.99 },
      { id: 2, name: 'Product 2', price: 19.99 },
      
    ];

    
    res.status(200).json(products);
  } else if (req.method === 'POST') {
    
    const { productId } = req.body;
    
    res.status(200).json({ message: 'Item added to cart' });
  } else {
    
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
