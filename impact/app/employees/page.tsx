import { createClient } from '@sanity/client'
import Carousel from '@/components/ui/carousel/Carousel';
import EmployeeCard from '@/components/ui/employee-card/EmployeeCard';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-09',
  useCdn: true,
})

async function getEmployees() {
  return await client.fetch(`*[_type == "employee"] {
    _id,
    name,
    position,
    email,
    "imageUrl": image.asset->url
  }`);
}

export default async function EmployeesPage() {
  const employees = await getEmployees();
  
  const employeeCards = employees.map((employee: any) => (
    <EmployeeCard 
      key={employee._id} 
      name={employee.name}
      position={employee.position}
      image={employee.imageUrl}
      email={employee.email}
    />
  ));

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Team</h1>
      <Carousel items={employeeCards} />
    </div>
  );
}