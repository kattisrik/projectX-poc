import axios from "axios";
export const URL = "https://projectxpoc.herokuapp.com/details/";

const instance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export const postData = (data) => {
  instance
    .post(URL, data)
    .then((res) => {
      if (res.status === 200) alert(`Successfully submitted!!!`);
      else if (res.status === 201) {
        if (res.data.message) {
          alert(`${res.data.message}`);
        } else {
          alert(`Unable to submit data. please try again in sometime`);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

// export const getData = (userName) => {
//   let userDetails = undefined;
//   instance.get(URL + "/" + userName).then((res) => {
//     userDetails = res.data;
//   });
//   return userDetails;
// };
