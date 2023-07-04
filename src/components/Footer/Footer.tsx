const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center">
            <p className="text-gray-600">© {new Date().getFullYear()} My Ecommerce Site. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  