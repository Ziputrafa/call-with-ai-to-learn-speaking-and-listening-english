import axios from 'axios';
export const GetTranscript = async () => {
  try {
    const response = await axios.get('http://localhost:8000/transcript');

    return response.data.chat;
  } catch (error) {
    return error;
  }
};
