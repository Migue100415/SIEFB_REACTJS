import axios from "axios";

const API_URL = "http://localhost:8081/api/trabajadores";

export const obtenerTrabajadores = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const crearTrabajador = async (trabajador) => {
  const response = await axios.post(API_URL, trabajador);
  return response.data;
};

export const actualizarTrabajador = async (
  id,
  trabajador
) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    trabajador
  );

  return response.data;
};

export const eliminarTrabajador = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};