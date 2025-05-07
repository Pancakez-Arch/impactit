"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Employee } from '../types';
import EmployeeCard from './EmployeeCard';

interface EmployeeCarouselProps {
  employees: Employee[];
}

const EmployeeCarousel: React.FC<EmployeeCarouselProps> = ({ employees }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDisplayCount(1);
      } else if (window.innerWidth < 1024) {
        setDisplayCount(2);
      } else {
        setDisplayCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(employees.length / displayCount);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + displayCount >= employees.length 
        ? 0 
        : prevIndex + displayCount
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - displayCount < 0 
        ? Math.max(0, employees.length - displayCount) 
        : prevIndex - displayCount
    );
  };

  const visibleEmployees = employees.slice(
    currentIndex,
    Math.min(currentIndex + displayCount, employees.length)
  );

  return (
    <div className="relative w-full py-8">
      <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-4 z-10">
        <button
          onClick={prevSlide}
          className="bg-white/90 hover:bg-white text-blue-600 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/90 hover:bg-white text-blue-600 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="overflow-hidden px-4">
        <div 
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{ transform: `translateX(0)` }}
        >
          {visibleEmployees.map((employee) => (
            <div 
              key={employee.id} 
              className={`${
                displayCount === 1 
                  ? 'w-full' 
                  : displayCount === 2 
                    ? 'w-1/2' 
                    : 'w-1/3'
              } flex-shrink-0 p-2 opacity-100 transition-opacity duration-500`}
            >
              <EmployeeCard employee={employee} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * displayCount)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / displayCount) === index
                ? 'bg-blue-600 w-6'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeCarousel;