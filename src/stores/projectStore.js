import { makeAutoObservable } from "mobx";
import instance from "./instance";

// make Project Store - fetchProjects:
class ProjectStore {
  // make empty obj :
  projects = [];

  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  // Fetch semesters methods:
  fetchProjects = async () => {
    try {
      const response = await instance.get("/project/");
      this.projects = response.data;
    } catch (error) {
      console.log("Store -> fetchProjects -> error", error);
    }
  };
}

const projectStore = new ProjectStore();

projectStore.fetchProjects();

export default projectStore;
