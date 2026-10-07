import request from "supertest";
import app from "../app.js";

test("POST /Cria uma nova missao", async () => {
    const resposta = await request(app).post("/missoes")
        .send({ nome: "NASA", agencia: "test", ano: "1551", status: "pendente" });

    expect(resposta.status).toBe(201);
    expect(resposta.body.nome).toBe("NASA");
});

test("GET /missoes  filtra missoes pelo nome", async () => {
  const resposta = await request(app).get("/missoes")
    .send("nome=Ancião");

  expect(resposta.status).toBe(200);
  expect(resposta.body[0].nome).toBe("Ancião");
});