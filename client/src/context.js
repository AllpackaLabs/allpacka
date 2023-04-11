import { createContext, useState } from 'react';

export const userContext = createContext({ user: null, setUser: () => { } });
export const tripContext = createContext({ currentTrip: null, setCurrentTrip: () => { } });