import axios from 'axios';

const api = axios.create({
  baseURL: 'https://64317024d4518cfb0e6171f0.mockapi.io/contacts/contacts/',
});

export const getContacts = async () => {
  const { data } = await api.get();
    return data;
     
};


export const addContact = async contact => {
  const { data } = await api.post('', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await api.delete(id);
  return data;
};