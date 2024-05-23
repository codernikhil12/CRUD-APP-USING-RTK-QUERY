import { axiosInstance } from './AxiosInstance'

export const addUser = async (addData) => {
  console.log(addData)
 try {
    const {data} = await axiosInstance.post('/insert', addData)
    console.log(data);
    return data
 } catch (error) {
    console.log(error);
 }
}
export const getUsers = async () => {
 try {
    const {data} = await axiosInstance.get('/fetchData')
    console.log(data);
    return data.data
 } catch (error) {
    console.log(error);
 }
}

export const getUserById = async (id) => {
   let { data } = await axiosInstance.get(`/fetchDataById/${id}`)
   return data
 }

export const updateUser = async (data) => {
   console.log(data);
   try {
      const updatedata = await axiosInstance.post(`/update/${data.id}`,data)
      console.log(updatedata);
      return updatedata
   } catch (error) {
      console.log(error);
   }
}


export const deleteUser = async (id) => {
   try {
     const response = await axiosInstance.get(`/delete/${id}`,{
     
     })
   console.log(response);
   return response.data;
   } catch (error) {
     console.error("Error deleting User:", error);
     throw error;
   }
 };