import axios from "axios";

const API_URL = "http://localhost:8081/api/jugadores";

export const obtenerJugadores = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const crearJugador = async (jugador) => {
  const response = await axios.post(API_URL, jugador);
  return response.data;
};

export const actualizarJugador = async (id, jugador) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    jugador
  );

  return response.data;
};

export const eliminarJugador = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};