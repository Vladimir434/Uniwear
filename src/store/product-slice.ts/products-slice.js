import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase-config";
import { create } from "zustand";
import { toast } from "react-toastify";
export const productsCollectionRef = collection(db,'products')

export const useProduct = create((set) => ({
  product:[],
  isfetch:true,
  async getAllProducrs() {
    try {
      set({isfetch:true})
      const quetySnapshot = await getDocs(productsCollectionRef);
      const productData = quetySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      set({product: productData})
      
    } catch (error) {
      toast.error('произошла ошибка',error)
    } finally{
      set({isfetch:false})
    }
  },
}))