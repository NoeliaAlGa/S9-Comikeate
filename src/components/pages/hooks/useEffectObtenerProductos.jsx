import ObtenerProductos from "./ObtenerProductos";
import { useEffect, useState } from "react";

function useEffectObtenerProductos (tipo) {
    const [productosComikeate, setProductosComikeate] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const data = await ObtenerProductos(tipo);
          setProductosComikeate(data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, [tipo]);

    return productosComikeate;
}

export default useEffectObtenerProductos


