require("dotenv").config();
import supertest from "supertest";
const { http } = require("./http");

describe("Super Teste de Rotas", () => {
  it("Rota Client", async () => {
    const res = await supertest(http).get("/pages/client");
    expect(res.statusCode).toEqual(200);
  });
  it("Rota Admin", async () => {
    const res = await supertest(http).get("/pages/admin");
    expect(res.statusCode).toEqual(200);
  });
  it("Rota Admin", async () => {
    const res = await supertest(http).get("/pages/admin");
    expect(res.statusCode).toEqual(200);
  });
  const usernameRando = `admin${Date.now()}`;
  let IDdoUsuarioADMIN = "";
  it("Rota Criar Sala Admin", async () => {
    const res = await supertest(http).post("/settings").send({
      chat: true,
      username: usernameRando,
    });
    expect(res.body.username).toEqual(usernameRando);
    expect(res.statusCode).toEqual(200);
    if (res.body.id) {
      IDdoUsuarioADMIN = res.body.id;
    }
  });
  it("Rota Criar Sala Admin ja existente", async () => {
    const res = await supertest(http).post("/settings").send({
      chat: true,
      username: usernameRando,
    });
    expect(res.body.message).toEqual("User already exists!");
    expect(res.statusCode).toEqual(400);
  });
  let IDdoUsuarioCriado = "";
  it("Rota Criar Usuário", async () => {
    const emailUsuario = `alvaro.r.p${Date.now()}@hotmail.com`
    const res = await supertest(http).post("/users").send({
      email: emailUsuario,
    });
    expect(res.body.email).toEqual(emailUsuario);
    expect(res.statusCode).toEqual(200);
    if (res.body.id) {
      IDdoUsuarioCriado = res.body.id;
    }
  });
  it("Rota Envia Mensagem", async () => {
    const mensagem = "Ola Bom dia. Tudo bem?"
    const res = await supertest(http).post("/messages").send({
      user_id: IDdoUsuarioCriado,
      text: mensagem,
      admin_id: IDdoUsuarioADMIN
  });
    expect(res.body.text).toEqual(mensagem);
    expect(res.statusCode).toEqual(200);
  });
  it("Rota Lista Chat do usuário", async () => {
    const res = await supertest(http).get(`/messages/${IDdoUsuarioCriado}`);
    expect(res.body.length).toEqual(1);
    expect(res.statusCode).toEqual(200);
  });
});
