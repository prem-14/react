import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/users');

  // DEV ONLY!!!
  await pause(1000);

  return response.data;
});

// https://redux-toolkit.js.org/api/createAsyncThunk#listening-for-abort-events
const fetchUsersWithSignal = createAsyncThunk('users/fetch', async (_, { signal }) => {
  const controller = new AbortController();
  signal.addEventListener('abort', () => {
    controller.abort()
  })
  const response = await axios.get('http://localhost:3005/users', {
    signal: controller.signal
  });

  return response.data;
});

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers, fetchUsersWithSignal };
