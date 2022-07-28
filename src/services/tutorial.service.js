import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/lawsuits");
  }

  get(id) {
    return http.get(`/lawsuits/${id}`);
  }

  create(data) {
    return http.post("/lawsuits", data);
  }

  update(id, data) {
    return http.put(`/lawsuits/${id}`, data);
  }

  delete(id) {
    return http.delete(`/lawsuits/${id}`);
  }

  deleteAll() {
    return http.delete(`/lawsuits`);
  }

  findByCaseName(case_name) {
    return http.get(`/lawsuits?case_name=${case_name}`);
  }
}

export default new TutorialDataService();