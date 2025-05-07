"use client"

import React, { useState } from 'react';
import { Equipment } from '../types';

interface EquipmentListProps {
  equipment: Equipment[];
}

const EquipmentList: React.FC<EquipmentListProps> = ({ equipment }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', ...Array.from(new Set(equipment.map(item => item.category)))];
  
  const filteredEquipment = selectedCategory === 'all' 
    ? equipment 
    : equipment.filter(item => item.category === selectedCategory);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEquipment.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {item.category}
                </span>
              </div>
              
              <p className="mt-2 text-gray-600">{item.description}</p>
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">{item.price} kr/dag</span>
                <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                  item.available > 0 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {item.available} tilgjengelig
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentList;