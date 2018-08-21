import request from 'request';
import { formatEmail, formatUsername } from '../utils/typicode';
import { arrays } from '../utils';

// const CACHE = [];
// const ENDPOINT = 'http://jsonplaceholder.typicode.com/users';
// const OPTIONS = {
//   headers: {
//     'Accept': 'application/json',
//     'Accept-Charset': 'utf-8'
//   }  
// };

class UserRepo {

  constructor() {
    this.CACHE = [];
    this.ENDPOINT = 'http://jsonplaceholder.typicode.com/users';
    this.OPTIONS = {
      headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
      }  
    };
  }

  findOneByEmail (email) {
    return new Promise((resolve, reject) => {
      let result = this.CACHE.find((x) => {
        return (x && x.email && 
          x.email.toLowerCase() === email.toLowerCase());
      });
      if (result) { return resolve(result); }
      let url = this.ENDPOINT + '?email=' + formatEmail(email);
      let options = {...this.OPTIONS, method: 'GET', url: url };
      request(options, (err, response, body) => {
        let item = arrays.single(JSON.parse(body));
        if (item) { 
          this.CACHE.push(item);
          resolve(item); 
        } else {
          reject('User not found');
        }
      });
    });
  }
  
  findOneByUsername (username) {
    return new Promise((resolve, reject) => {
      let result = this.CACHE.find((x) => {
        return (x && x.username && 
          x.username.toLowerCase() === username.toLowerCase());
      });
      if (result) { return resolve(result); }
      let url = this.ENDPOINT + '?username=' + formatUsername(username);
      let options = {...this.OPTIONS, method: 'GET', url: url };
      request(options, (err, response, body) => {
        let item = arrays.single(JSON.parse(body));
        if (item) { 
          this.CACHE.push(item);
          resolve(item); 
        } else {
          reject('User not found');
        }
      });
    });
  }

}

export default UserRepo;