import React from 'react';
import EmployeeCarousel from '../components/EmployeeCarousel';
import { User } from 'lucide-react';
import { useEmployees } from '../hooks/useEmployees';

const EmployeeSection: React.FC = () => {
  const { employees, isLoading, error } = useEmployees();

  return (
    <section id="ansatte" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Vårt dedikerte team</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Møt våre profesjonelle medarbeidere som er her for å hjelpe deg med å finne det perfekte utstyret for ditt eventyr.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : error ? (
          <div className="text-center p-8 bg-red-50 rounded-lg">
            <p className="text-red-600">
              Beklager, vi kunne ikke laste inn ansattinformasjonen. Vennligst prøv igjen senere.
            </p>
          </div>
        ) : employees.length === 0 ? (
          <div className="text-center p-8 bg-gray-100 rounded-lg flex flex-col items-center">
            <User className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-600">Ingen ansattinformasjon tilgjengelig for øyeblikket.</p>
          </div>
        ) : (
          <EmployeeCarousel employees={employees} />
        )}
      </div>
    </section>
  );
};

export default EmployeeSection;