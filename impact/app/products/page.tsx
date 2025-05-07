import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-09',
  useCdn: true,
});

async function getProducts() {
  return await client.fetch(`*[_type == "equipment"] {
    _id,
    kategori,
    type,
    modell,
    "imageUrl": bilde.asset->url
  }`);
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Equipment</h1>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product: any) => (
            <div key={product._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="relative h-48 mb-4">
                <img
                  src={product.imageUrl || '/images/placeholder.jpg'}
                  alt={product.modell}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <span className="text-sm text-blue-600 font-medium">{product.kategori}</span>
                <h3 className="text-xl font-semibold">{product.modell}</h3>
                <p className="text-gray-600">{product.type}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}