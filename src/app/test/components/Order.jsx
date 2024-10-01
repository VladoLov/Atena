// pages/order.jsx

import Link from "next/link";

export default function Order() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Order Your Test Now</h1>
      <p className="mb-8">
        Please proceed with the order by entering your details and selecting
        your preferred testing option.
      </p>
      <button className="bg-crimson-500 mr-8 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-teal-700">
        Proceed to Payment
      </button>
      <button className="bg-platinum-100 text-black px-6 py-3 rounded-lg text-lg shadow-md hover:bg-teal-700">
        <Link href="/">Return to home</Link>
      </button>
    </div>
  );
}
