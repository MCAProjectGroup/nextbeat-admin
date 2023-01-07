// import * as config from '../config';
import axios, {AxiosResponse} from 'axios';
// import store from '../../store';
// import {LogoutSuccessfully} from '../../store/auth';
// import { useSelector , useDispatch} from 'react-redux';
// import { RootState } from '../store';
let baseuri = process.env.REACT_APP_BASE_URL;
export const Request = async (method, url, data = {}, formData = false) => {
  console.log('url', baseuri + url);
  // const token = useSelector((state: RootState) => state.auth.token);
  let headerObj = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  if (method == 'upload' || formData) {
    headerObj['Content-Type'] = 'multipart/form-data';
  }

  //
  const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjNiMTMzMmJhOTk2ZjY0NjhkMjhjNGE5IiwidGltZSI6MTY3Mjg1NTYwNzAxOCwiaWF0IjoxNjcyODU1NjA3fQ.e_f1V-c4dRVR-6oCc6WsNXFAr4MG_-dAYHMiZ31Skk0fPh8PWIj7dmHBtZeHb1nOl1fjBictr37JQ9Pyd0TwX1TDzI04zT_4xJW4Ow_k4j7GrwCAr4QK8yS0Oe_2uB2rj6HFw9Viy5-0BhW9oA0DnuW-HqkY8lkRvb7L4mJSxUS6oyBN7P-tF6UdqXW64b63FWEMNMHqep34QjUYqJlSK0-F9B7mxeQ5o_OWVXyUTZkQbR3-Boilk0TmgCOfSvCdQq2zJGa2v2c_8rqpzUU4LNbQq1Nh4Zw0sIiRfYdKO7BwwjROrRTo81nNaSAbiWpcE-Ne0uxCXc1j0hqiBDQynIxjvK8olrr2NGBv-0CTu5RqN8TLQnTjnOsnpuygBToIjBmeOW87jqjsGtZtecgLjRPNpw3GKzSUQDhfcFHMT9bXC6RSlWbRLH0Pr-cjnKphleRTQM_3u1by6u330ISf-z1mOR5xQJ4-FX8s48BGGOb_dZuzWi0_xqiOb3k2-CvP"

  // console.log('tttttttttttttttttttttttttttttttt', token);
  if (token) {
    headerObj['authorization'] =   token;
  }

  let instance = axios.create({
    baseURL: baseuri,
    timeout: 8000,
    headers: headerObj,
    validateStatus: status => {
      // console.log({status})
      if (status === 401) {
        // AsyncStorage.removeItem('token');
        // store.dispatch(LogoutSuccessfully());
      }
      return status >= 200 && status < 300;
    },
  });

  let base;

  if (method === 'post') {
    console.log('post');
    base = instance.post(url, data);
  } else if (method === 'put') {
    base = instance.put(url, data);
  } else if (method === 'patch') {
    base = instance.patch(url, data);
  } else if (method === 'delete') {
    base = instance.delete(url);
  } else if (method === 'upload') {
    // base = RNFetchBlob.fetch(
    //   'POST',
    //   config.baseUrl + url,
    //   headerObj,
    // [
    //   {
    //     name: 'dash_image',
    //     filename: "profile"
    //     ,
    //     "type": data['mime'],
    //     data: RNFetchBlob.wrap(data['path'])
    //   }, { name: 'dash_id', data: String(data["id"]) },]
    // );

    // base = RNFetchBlob.fetch('POST', baseuri + url, headerObj, data);
  } else base = instance.get(url, {params: data});

  return base;
};
