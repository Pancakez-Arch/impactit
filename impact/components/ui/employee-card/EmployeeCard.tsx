interface EmployeeProps {
  name: string;
  position: string;
  image: string;
  email: string;
}

export default function EmployeeCard({ name, position, image, email }: EmployeeProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64 w-full">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{position}</p>
        <a 
          href={`mailto:${email}`}
          className="text-blue-600 hover:text-blue-800"
        >
          {email}
        </a>
      </div>
    </div>
  );
}