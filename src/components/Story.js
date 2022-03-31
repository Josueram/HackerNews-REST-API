import React, { useState, useEffect } from 'react';

import { getStory } from '../services/hackerNewsApi';
import { mapTime } from '../mappers/mapTime';

// Estilos
import { StorySection, StoryTitle, StoryData, StoryDataElement } from '../styles/StoryStyles';

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect (() => {
    getStory(storyId).then(data => data && data.title && setStory(data));
  }, []);

  return story && story.title ? (
    <StorySection data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>

      <StoryData>
        <span>
          <StoryDataElement color="#000">By:</StoryDataElement> {story.by}
        </span>
        <span>
          <StoryDataElement color="#000">Posted:</StoryDataElement> {` `}
          {mapTime(story.time)}
        </span>
        <span>
          <StoryDataElement color="#000"><a href={story.kids}> Coments</a></StoryDataElement>
        </span>
      </StoryData>

    </StorySection>
  ): null;
};