import React, { useState, useEffect } from 'react';
import { DogImage } from './components/DogImage';
import { BanList } from './components/BanList';
import { ExploreButton } from './components/ExploreButton';

const API_URL = 'https://dog.ceo/api/breeds/image/random';

export default function App() {
  const [dogImage, setDogImage] = useState(null);
  const [banList, setBanList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomDog = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data.status === 'success') {
        const breedFromUrl = data.message.split('/')[4]; // Extract breed from URL
        if (!banList.includes(breedFromUrl)) {
          setDogImage({ url: data.message, breed: breedFromUrl });
        } else {
          // If breed is banned, try again
          fetchRandomDog();
        }
      }
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRandomDog();
  }, []);

  const handleBan = (breed) => {
    if (!banList.includes(breed)) {
      setBanList([...banList, breed]);
      fetchRandomDog(); // Fetch a new dog after banning
    }
  };

  const handleRemoveBan = (breed) => {
    setBanList(banList.filter(item => item !== breed));
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">DogExplorer</h1>
      <div className="w-full max-w-3xl">
        {dogImage && <DogImage dogImage={dogImage} onBan={handleBan} />}
        <ExploreButton onClick={fetchRandomDog} isLoading={isLoading} />
      </div>
      <div className="w-full max-w-md mt-8">
        <BanList banList={banList} onRemove={handleRemoveBan} />
      </div>
    </div>
  );
}