/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { InteractionManager } from 'react-native';

const initialState = false;

function useInteractionManager() {
  const [interactionsComplete, updateInteractions] = useState(initialState);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      updateInteractions(true);
    });
  }, []);

  return interactionsComplete;
}

export default useInteractionManager;
