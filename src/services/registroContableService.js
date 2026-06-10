import axios from "axios";

const API_URL =
  "http://localhost:8081/api/registros-contables";

export const obtenerRegistros =
  async () => {

    const response =
      await axios.get(API_URL);

    return response.data;
};

export const crearRegistro =
  async (registro) => {

    const response =
      await axios.post(
        API_URL,
        registro
      );

    return response.data;
};

export const eliminarRegistro =
  async (id) => {

    await axios.delete(
      `${API_URL}/${id}`
    );
};

export const actualizarRegistro =
  async (id, registro) => {

    const response =
      await axios.put(
        `${API_URL}/${id}`,
        registro
      );

    return response.data;
};