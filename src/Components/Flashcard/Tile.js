const Tile = ({ title, description, moduleName, onOpen }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 m-2">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-gray-500 mb-4">Module: {moduleName}</p>
        <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600" onClick={onOpen}>
          Open
        </button>
      </div>
    );
  };
  
  export default Tile;