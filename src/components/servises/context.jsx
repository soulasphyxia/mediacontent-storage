import { createContext, useContext, useState } from 'react';
import axios from 'axios';

let pageNum = 0

async function fetchData() {
  return await axios.get(`https://video-storage-api-production.up.railway.app/api/v1/posts?page=${pageNum}`).then((response) => response.data.content);
}
const temp = await fetchData();

const MyDataContext = createContext();

export function useMyData() {
  return useContext(MyDataContext);
}

export function MyDataProvider({ children }) {
  const [items, setItems] = useState(temp);
  
  const itemsActions = {
    loadNext: async() => {
      pageNum++
      const temp = await fetchData()
      temp.length ? setItems([...items, ...temp]) : pageNum--
    }
  }

  return (
    <MyDataContext.Provider value={{items, itemsActions}}>
      {children}
    </MyDataContext.Provider>
  );
}