import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

const porta = process.env.PORT || 3333

http.listen(porta, () => console.log(`Servidor Rodando na porta ${porta}`));
