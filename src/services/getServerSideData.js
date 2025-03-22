import { doc, getDoc } from "firebase/firestore";
import {db} from '..//../firebase/clientApp';

const getServerSideData = async (url) => {
    try {
      const docRef = doc(db, url);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        return docSnap.data() || [];
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
    return [];
  };


  export default getServerSideData;