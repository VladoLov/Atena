function FramerMainSection() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
          neque eu tellus rhoncus ut eleifend nibh porttitor.
        </p>
      </section>
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>The Company</li>
          <li>Mission</li>
          <li>The Founders</li>
        </ul>
      </section>
    </main>
  );
}

export default FramerMainSection;
