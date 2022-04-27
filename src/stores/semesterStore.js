import { makeAutoObservable } from "mobx";
import instance from "./instance";

//! make sure of the code ::
// make auth store - sign up - sign in:
class SemesterStore {
  // make empty obj :
  semesters = [];

  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  // Fetch semesters methods:
  fetchSemesters = async () => {
    try {
      const response = await instance.get("/semester/");
      this.semesters = response.data;
    } catch (error) {
      console.log("Store -> fetchSemesters -> error", error);
    }
  };
}

const semesterStore = new SemesterStore();

semesterStore.fetchSemesters();

export default semesterStore;
