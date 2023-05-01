import apiClient from "@/services/api-client";

export const fetchAllTodos = async () => {
  try {
    const res = await apiClient.get(`/todos`);
    if (res.status === 200) return res.data;
  } catch (error) {
    return error.response;
  }
};

export const fetchTodoById = async (todoId) => {
  try {
    const res = await apiClient.get(`/todos/${todoId}`);
    if (res.status === 200) return res.data;
  } catch (error) {
    return error.response;
  }
};
