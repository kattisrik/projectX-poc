import { useEffect, useState } from "react";
import { URL } from "../utils/ApiService";
import axios from "axios";

const Invitaion = () => {
  const subURL = window.location.href.split("/");
  const [userDetails, setUserDetails] = useState();
  useEffect(async () => {
    const response = await axios.get(URL + subURL[4]);
    setUserDetails(response.data);
  }, []);
  return (
    <>
      {userDetails ? (
        <div>
          <h1>Invitation</h1>
          <h2>Message from user: </h2>
          {userDetails?.message && <h2>{userDetails.message}</h2>}
        </div>
      ) : (
        <h1>404 Page not found</h1>
      )}
    </>
  );
};
export default Invitaion;
