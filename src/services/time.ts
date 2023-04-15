import axios from 'axios';

export const fetchTime = axios.get('http://worldtimeapi.org/api/timezone/Europe/Moscow').then((data) => data.data);
