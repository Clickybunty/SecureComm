import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Willkommen bei SecureComm</h1>
      <p className="mt-4 text-lg">Dezentrale, sichere Kommunikation.</p>
      <Link
        to="/chat"
        className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
      >
        Zum Chat
      </Link>
    </div>
  );
};

export default Home;
