import { makeAutoObservable } from "mobx";
import instance from "./instance";

// make Semester Store - fetchSemesters - addSemester:
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

  addSemester = async (semester) => {
    try {
      const response = await instance.post("/semester/create/", semester);
      this.semesters.push(response.data);
    } catch (error) {
      console.log("Store -> addSemester -> error", error);
    }
  };
}

const semesterStore = new SemesterStore();

semesterStore.fetchSemesters();

export default semesterStore;
