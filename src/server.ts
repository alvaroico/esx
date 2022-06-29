import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(80, () => console.log("Servidor Rodando na porta 80"));
