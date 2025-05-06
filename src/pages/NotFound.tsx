
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/Button";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 max-w-lg">
        <h1 className="text-6xl font-bold mb-6 gradient-text">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button to="/" variant="primary" className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Go to Home
          </Button>
          <Button variant="outline" onClick={goBack} className="flex items-center">
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
