import { useContext, useState } from "react";
import { userContext } from "../App";

export default function UserData() {
  const { input, handleInput } = useContext(userContext);
  const [editingField, setEditingField] = useState(null);

  function handleEdit(field) {
    setEditingField(field);
  }

  function handleSave() {
    setEditingField(null);
  }

  function prevent(e){
    e.preventDefault()
  }

  return (
    <form onClick={prevent}>
      <div>
        <label>Nombre</label>
        {editingField === "nombre" ? (
          <input
            type="text"
            name="nombre"
            value={input.nombre}
            onChange={handleInput}
            onBlur={handleSave}
          />
        ) : (
          <>
            <h1>Tu nombre es: {input.nombre}</h1>
            <button type="button" onClick={() => handleEdit("nombre")}>
              Editar
            </button>
          </>
        )}
      </div>

      <div>
        <label>Apellido</label>
        {editingField === "apellido" ? (
          <input
            type="text"
            name="apellido"
            value={input.apellido}
            onChange={handleInput}
            onBlur={handleSave}
          />
        ) : (
          <>
            <h1>Tu apellido es: {input.apellido}</h1>
            <button type="button" onClick={() => handleEdit("apellido")}>
              Editar
            </button>
          </>
        )}
      </div>

      <div>
        <label>Email</label>
        {editingField === "email" ? (
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={handleInput}
            onBlur={handleSave}
          />
        ) : (
          <>
            <h1>Tu email es: {input.email}</h1>
            <button type="button" onClick={() => handleEdit("email")}>
              Editar
            </button>
          </>
        )}
      </div>
    </form>
  );
}
// hol