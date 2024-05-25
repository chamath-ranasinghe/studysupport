import React, { useState } from 'react';
import CollapsibleNavbar from '../Components/Flashcard/CollapsibleNavbar';

const ViewFlashcard = () => {
  const [folders, setFolders] = useState([]);
  const [newFolderName, setNewFolderName] = useState('');
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [viewingFlashcards, setViewingFlashcards] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const addFolder = () => {
    if (newFolderName.trim() !== '') {
      setFolders([...folders, { name: newFolderName, flashcards: [] }]);
      setNewFolderName('');
    }
  };

  const addFlashcardToFolder = (folderIndex, term, definition) => {
    const updatedFolders = [...folders];
    updatedFolders[folderIndex].flashcards.push({ term, definition });
    setFolders(updatedFolders);
  };

  return (
    <div className="relative">
      <div className={`transition-opacity duration-300 ${isNavOpen ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Flashcard Folders</h2>
          <div className="mb-4">
            <input
              type="text"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              placeholder="New Folder Name"
              className="border rounded p-2 mr-2"
            />
            <button
              onClick={addFolder}
              className="bg-purple-500 text-white p-2 rounded"
            >
              Add Folder
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {folders.map((folder, index) => (
              <div
                key={index}
                className="border rounded p-4 cursor-pointer"
                onClick={() => setSelectedFolder(index)}
              >
                <h3 className="text-xl font-bold">{folder.name}</h3>
                <p>{folder.flashcards.length} Flashcards</p>
              </div>
            ))}
          </div>
          {selectedFolder !== null && (
            <FolderDetail
              folder={folders[selectedFolder]}
              onAddFlashcard={(term, definition) =>
                addFlashcardToFolder(selectedFolder, term, definition)
              }
            />
          )}
        </div>
      </div>

      <CollapsibleNavbar isNavOpen={isNavOpen} toggleNav={toggleNav} setViewingFlashcards={setViewingFlashcards} />
    </div>
  );
};

const FolderDetail = ({ folder, onAddFlashcard }) => {
  const [newTerm, setNewTerm] = useState('');
  const [newDefinition, setNewDefinition] = useState('');

  const handleAddFlashcard = () => {
    if (newTerm.trim() !== '' && newDefinition.trim() !== '') {
      onAddFlashcard(newTerm, newDefinition);
      setNewTerm('');
      setNewDefinition('');
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold">{folder.name}</h3>
      <div className="mb-4">
        <input
          type="text"
          value={newTerm}
          onChange={(e) => setNewTerm(e.target.value)}
          placeholder="Term"
          className="border rounded p-2 mr-2"
        />
        <input
          type="text"
          value={newDefinition}
          onChange={(e) => setNewDefinition(e.target.value)}
          placeholder="Definition"
          className="border rounded p-2 mr-2"
        />
        <button
          onClick={handleAddFlashcard}
          className="bg-purple-500 text-white p-2 rounded"
        >
          Add Flashcard
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {folder.flashcards.map((flashcard, index) => (
          <div key={index} className="border rounded p-4">
            <h4 className="font-bold">{flashcard.term}</h4>
            <p>{flashcard.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewFlashcard;
