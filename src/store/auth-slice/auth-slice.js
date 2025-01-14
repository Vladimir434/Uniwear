/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../utils/firebase/firebase-config'
import { toast } from "react-toastify";
export const useRegistr = create((set) => ({
  isFetch: false,
  async registrUser(email, password) {
    set({ isFetch: true });
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      toast.error('Проверьте Email or password');
    } finally {
      set({ isFetch: false });
    }
  },
  async loginUser (email,password) {
    set({isFetch: true})
    try {
      const userCredentials = await signInWithEmailAndPassword(auth,email,password)
      console.log(userCredentials);
    } catch (error) {
      console.error(error)
    } finally {
      set({isFetch:false})
    }
  }
}));
