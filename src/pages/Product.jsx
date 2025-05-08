import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import f9 from '../assets/img/f9.png'

export default function Product() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  
  // This would normally come from an API or props
  // For now, we'll use a mock product
  const product = {
    id: id || 1,
    name: 'Organic Green Broccoli',
    price: 25.00,
    description: 'Fresh organic broccoli grown without pesticides. Rich in vitamins and minerals, this broccoli is harvested at peak ripeness to ensure the best flavor and nutritional value.',
    longDescription: 'Broccoli is a nutritional powerhouse packed with vitamins, minerals, fiber, and antioxidants. Our organic broccoli is grown using sustainable farming practices, without synthetic pesticides or fertilizers. Each head is carefully harvested by hand at peak ripeness to ensure the best flavor and nutritional value. Broccoli is known for its cancer-fighting properties and is an excellent source of vitamin C, vitamin K, and folate. Add it to your diet for a healthy boost!',
    image: f9,
    rating: 5,
    reviews: 24,
    sku: 'BRC-001',
    category: 'Vegetables',
    tags: ['Organic', 'Fresh', 'Vegetables'],
    stock: 50,
    weight: '0.5 kg',
    nutritionalInfo: {
      calories: 55,
      protein: '3.7g',
      carbs: '11.2g',
      fat: '0.6g',
      fiber: '5.1g',
      vitamins: 'A, C, K, B9'
    }
  }

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value)
    if (value > 0 && value <= product.stock) {
      setQuantity(value)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <div className="bg-[#F9F9F9] p-10 rounded-lg flex items-center justify-center">
            <img src={product.image} alt={product.name} className="max-w-full max-h-[400px]" />
          </div>
        </div>
        
        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-500 mr-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < product.rating ? 'text-yellow-500' : 'text-gray-300'} />
              ))}
            </div>
            <span className="text-gray-600">({product.reviews} reviews)</span>
          </div>
          
          <p className="text-2xl font-bold text-[#80B600] mb-4">${product.price.toFixed(2)}</p>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className="mr-4 font-medium">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <button 
                  onClick={decreaseQuantity}
                  className="px-3 py-1 border-r"
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={handleQuantityChange}
                  className="w-16 text-center py-1"
                />
                <button 
                  onClick={increaseQuantity}
                  className="px-3 py-1 border-l"
                >
                  +
                </button>
              </div>
            </div>
            
            <button className="bg-[#80B600] text-white py-3 px-6 rounded-md hover:bg-[#6a9900] transition-colors w-full md:w-auto">
              Add to Cart
            </button>
          </div>
          
          <div className="border-t pt-4">
            <p><span className="font-medium">SKU:</span> {product.sku}</p>
            <p><span className="font-medium">Category:</span> {product.category}</p>
            <p><span className="font-medium">Tags:</span> {product.tags.join(', ')}</p>
            <p><span className="font-medium">Weight:</span> {product.weight}</p>
          </div>
        </div>
      </div>
      
      {/* Product Description and Details Tabs */}
      <div className="mt-12">
        <div className="border-b mb-6">
          <div className="flex">
            <button className="py-2 px-4 border-b-2 border-[#80B600] font-medium">
              Description
            </button>
            <button className="py-2 px-4 text-gray-500 font-medium">
              Additional Information
            </button>
            <button className="py-2 px-4 text-gray-500 font-medium">
              Reviews ({product.reviews})
            </button>
          </div>
        </div>
        
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">{product.longDescription}</p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Nutritional Information</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Calories: {product.nutritionalInfo.calories}</li>
            <li>Protein: {product.nutritionalInfo.protein}</li>
            <li>Carbohydrates: {product.nutritionalInfo.carbs}</li>
            <li>Fat: {product.nutritionalInfo.fat}</li>
            <li>Fiber: {product.nutritionalInfo.fiber}</li>
            <li>Vitamins: {product.nutritionalInfo.vitamins}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
