import React, { useEffect, useState } from 'react';

import { getStoryIds } from '../services/hackerNewsApi';
import { Story } from '../components/Story';

// Estilos
import { GlobalStyle, StoriesContainerSection, StoryTitle } from '../styles/StoriesContainerStyles';

export const StoriesContainer = () => {
  const [storyIds,setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerSection>
        <StoryTitle>
          <h1>Hacker News Stories</h1>
        </StoryTitle>
        
        {storyIds.map(storyId => (<Story key={storyId} storyId={storyId} />))}
      </StoriesContainerSection>
    </>
  );
};
