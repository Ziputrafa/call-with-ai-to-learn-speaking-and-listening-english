import axios from 'axios';

export const SendInput = async (userInput) => {
  try {
    const response = await axios.post('http://localhost:8000/message', { data: { message: userInput, isDone: false } });

    return response.data.chat;
  } catch (error) {
    return error;
  }
};
