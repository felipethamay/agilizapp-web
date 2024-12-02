const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

const apiService = {
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao fazer login");
      }

      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default apiService;
