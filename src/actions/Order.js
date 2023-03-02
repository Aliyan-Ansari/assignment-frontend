/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { serverURL } from '../resources/ServerUrl';


export const getOrders = ()  => {
  return (
    axios({
      url: '/order',
      method: 'GET',
      baseURL: serverURL,
    }).then((res) => res).catch((err) => {
      throw new Error(err);
    })
  );
};


export const createOrder = (data) => {
  return (
    axios({
      url: '/order',
      method: 'POST',
      baseURL: serverURL,
      data,
    }).then((res) => res).catch((err) => {
      throw new Error(err);
    })
  );
};

export const updateOrder = (data, id) => {
  return (
    axios({
      url: `/order/${id}`,
      method: 'PUT',
      baseURL: serverURL,
      data,
    }).then((res) => res).catch((err) => {
      throw new Error(err);
    })
  );
};

export const deleteOrder = (id) => {
    console.log('Id: ', id);
    return (
      axios({
        url: `/order/${id}`,
        method: 'DELETE',
        baseURL: serverURL,
      }).then((res) => res).catch((err) => {
        throw new Error(err);
      })
    );
  };