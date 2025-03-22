import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/clientApp";
import { message } from "antd";

class AsyncRequest {
  async get(url, successCallBack) {
    try {
      const docRef = doc(db, url);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        successCallBack(docSnap.data());
      }
    } catch (e) {
      message.error("Error fetching data");
    }
  }

  async put(url, data) {
    try {
      const docRef = doc(db, url);
      await updateDoc(docRef, data);
      message.success("Data saved successfully");
    } catch (e) {
      message.error("Error saving data");
    }
  }

  async post(url, data) {}

  async delete(url) {}
}

export default new AsyncRequest();
