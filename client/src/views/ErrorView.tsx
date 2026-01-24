import { useNavigate } from 'react-router-dom';

export const ErrorView = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 background-dark">
      <h1 className="text-9xl font-bold text-[#b03a3a]">404</h1>
      <p className="text-2xl mt-4 mb-6 text-[#dde1e9]">
        Oops! La página que buscas no existe.
      </p>
      <button
        onClick={() => navigate('/')}
        className="text-sm lg:text-base px-3 py-2 bg-[#b03a3a] text-white rounded hover:bg-[#932f2f] transition-colors duration-300 cursor-pointer"
      >
        Volver al inicio
      </button>
    </div>
  );
};
