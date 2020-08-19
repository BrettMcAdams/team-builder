import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';

const initialList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    username: 'Brett',
    email: 'Brett@brett.brett',
    role: 'Student',
  }
]

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialFriendsList })
}
const fakeAxiosPost = (url, { username, email, role }) => {
  const newFriend = { id: uuid(), username, email, role }
  return Promise.resolve({ status: 200, success: true, data: newFriend })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
