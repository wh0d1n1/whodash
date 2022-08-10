import {
  createContext,
  useState,
  useEffect
} from "react";
import {
  useNavigate
} from "react-router-dom";

const AppointmentContext = createContext();

export default AppointmentContext;

export const AppointmentProvider = ({
  children
}) => {
  const [datas, setDatas] = useState()



  const getAppointments = async () => {
    myHeaders.append("Authorization", "Bearer c399e7a0-3b9e-418a-a00d-4bc736f4d0fe");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const epochstart = Math.round(new Date().getTime())

    const response = await fetch(
      "https://rest.gohighlevel.com/v1/appointments/?startDate=" +
      epochstart +
      "&endDate=1672508921000&calendarId=lnFBvDGx9bYFHn9npJTM&includeAll=true", 
      requestOptions
      ).then(res => res.json())
    const data = await res.json();

    if (response.status === 200) {setDatas(data);} else {alert("Something went wrong!");}}


  const contextData = {
    datas,
    setDatas,
    getAppointments
  };


  return ( 
  <AppointmentContext.Provider value = {contextData}> 
  {loading ? null : children} 
  </AppointmentContext.Provider>
  );
};