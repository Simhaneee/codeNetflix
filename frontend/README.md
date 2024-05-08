-------------------------------------Netflix clone------------------
----------Packages Installed--------
 React bootstrap
 React Router Dom
 axios

------------------------------Routes------------------------
1.signup
2.sign in
3.home screen



export const registerUserService = (request) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return new Promise((resolve, reject) => {
    return axios
      .post(API_HOST + `user/register`, request.user, { headers: headers })
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
        reject(response.data);
      })
      .catch((error) => {
        if (error && error.response?.status === 406) {
          reject({ message: "User is Already Registered!!!", isError: true });
        } else {
          errorHandler(error, reject);
        }
      });
  });
};