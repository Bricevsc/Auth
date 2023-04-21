import { Schema, model } from "mongoose";
// =============== Création du Modèle Mongoose ======================

const UsersSchema = new Schema(
  {
    firstName: String, // type String, obligatoire
    lastName: String, // type String, obligatoire
    email: String, // type String, obligatoire
    password: String, // type String, obligatoire
  } // Schéma des documents de la collection
);

const collectionName = "users";

UsersSchema.static("findByName", async function (name) {
  return this.find({ user: name });
});

export const UsersModel = model("Users", UsersSchema, collectionName);
