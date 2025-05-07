import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Employee } from '../types';

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img
          src={employee.image}
          alt={employee.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h2 className="text-2xl font-bold">{employee.name}</h2>
          <p className="text-lg opacity-90">{employee.title}</p>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <p className="text-gray-700 mb-4 leading-relaxed">{employee.bio}</p>
        
        <div className="space-y-2 mt-auto">
          <div className="flex items-center text-blue-600">
            <Mail className="w-5 h-5 mr-2" />
            <a href={`mailto:${employee.email}`} className="hover:underline">
              {employee.email}
            </a>
          </div>
          
          <div className="flex items-center text-blue-600">
            <Phone className="w-5 h-5 mr-2" />
            <a href={`tel:${employee.phone}`} className="hover:underline">
              {employee.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;