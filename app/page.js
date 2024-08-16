import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold mb-4'>Welcome to Our Website</h1>
      <p className='text-lg mb-6 text-gray-700'>
        Explore our Frequently Asked Questions to find answers to common
        queries.
      </p>

      <Link href='/faq'>
        <p className='bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-blue-600 transition duration-300'>
          Go to FAQ Page
        </p>
      </Link>
    </div>
  );
}
