import axios from 'axios';

const KEY = 'AIzaSyA6p0N92IHIB9I1negO9m_p1GlcaNyVErU';

export const baseParams = {
  part: 'snippet',
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});
