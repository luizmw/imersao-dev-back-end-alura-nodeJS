import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizaNovoPost } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}
const upload = multer({dest:"./uploads"});
const routes = (app) => {
    // permite que o server interprete requests witch corpo em json
    app.use(express.json());

    app.use(cors(corsOptions));

    // rota para buscar todos os posts
    app.get("/posts", listarPosts);
    // rota para criar um post
    app.post("/posts", postarNovoPost);
    // rota para fazer upload de post
    app.post("/upload", upload.single("imagem"), uploadImagem);
    // rota para atualizar
    app.put("/upload/:id", atualizaNovoPost);
}

export default routes;

