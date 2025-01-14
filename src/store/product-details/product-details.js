import { create } from "zustand";
import { productsCollectionRef } from "../product-slice.ts/products-slice";
import { doc, getDoc } from "firebase/firestore";

export const productDetails = create((set) => ({
  defineProducts:null,
  isFetch:false,

  getDefaneProducts: async (id) => {
    try {
      set({isFetch:true})      
      const defineProductsRes = doc(productsCollectionRef,id);
      const productSnap = await getDoc(defineProductsRes)
      set({defineProducts: {id:productSnap.id, ...productSnap.data()}})      
    } catch (error) {
      console.error(error);
    } finally {
      set({isFetch:false})
    }
  }
}))

