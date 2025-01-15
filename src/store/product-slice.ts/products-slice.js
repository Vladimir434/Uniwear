import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../utils/firebase/firebase-config";
import { create } from "zustand";
import { toast } from "react-toastify";

export const productsCollectionRef = collection(db, "products");

export const categoriesCollectionRef = collection(db, "categories");
export const categoryDoc = doc(categoriesCollectionRef, "category");

export const useProduct = create((set) => ({
  product: [],
  isfetch: true,
  category: [],
  currentCategory: "",

  setCurrentCategory(value) {
    set({ currentCategory: value });
  },
  async getAllProducrs(category) {
    try {
      set({ isfetch: true });
      const q = query(
        productsCollectionRef,
        where("category", "array-contains", category)
      );
      const quetySnapshot = await getDocs(q);
      const productData = quetySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      set({ product: productData });
    } catch (error) {
      toast.error("произошла ошибка", error);
    } finally {
      set({ isfetch: false });
    }
  },
  async getAllCategory() {
    const productSnap = await getDoc(categoryDoc);
    set({ category: productSnap.data()?.category });
    set({currentCategory:productSnap.data()?.category[0]})
  },
}));
