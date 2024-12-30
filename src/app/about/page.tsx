import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center items-center">
      <div className="max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative h-56 w-full">
          <Image
            src="/about.jpg"
            alt="About Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-5xl font-bold text-yellow-500 text-center mb-4">About Us</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to our platform! We are passionate about delivering exceptional solutions that
            combine creativity, technology, and innovation. Our mission is to create a space where
            ideas flourish and users connect seamlessly with what matters most.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Our team consists of skilled professionals who are dedicated to pushing the boundaries
            of design and development. From concept to execution, we ensure every project meets the
            highest standards of quality and usability.
          </p>
        </div>
      </div>
    </div>
  );
}
