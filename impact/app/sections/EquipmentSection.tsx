import React from 'react';
import { Package } from 'lucide-react';
import { useEquipment } from '../hooks/useEquipment';
import EquipmentList from '../components/EquipmentList';

const EquipmentSection: React.FC = () => {
  const { equipment, isLoading, error } = useEquipment();

  return (
    <section id="utstyr" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Vårt utstyr til utleie</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Vi tilbyr et bredt utvalg av kvalitetsutstyr for dine utendørsaktiviteter. 
            Bla gjennom kategoriene eller søk for å finne det du trenger.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : error ? (
          <div className="text-center p-8 bg-red-50 rounded-lg">
            <p className="text-red-600">
              Beklager, vi kunne ikke laste inn utstyrsinformasjonen. Vennligst prøv igjen senere.
            </p>
          </div>
        ) : equipment.length === 0 ? (
          <div className="text-center p-8 bg-gray-100 rounded-lg flex flex-col items-center">
            <Package className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-600">Ingen utstyrsinformasjon tilgjengelig for øyeblikket.</p>
          </div>
        ) : (
          <EquipmentList equipment={equipment} />
        )}
      </div>
    </section>
  );
};

export default EquipmentSection;