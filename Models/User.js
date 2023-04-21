import { Schema, model } from 'mongoose';
// =============== Création du Modèle Mongoose ======================

const UsersModel =new Schema(
  "Users", // Nom du modèle (libre au choix)
  {
    firstName: String, // type String, obligatoire
    lastName: String, // type String, obligatoire
    email: String, // type String, obligatoire
    password: String, // type String, obligatoire
  }, // Schéma des documents de la collection
  collectionName // Optionnel: Nom de la collection dans la base Mongo
);

const collectionName = 'users';

UsersModel.static('findByName', async function(name) {
  return this.find({ user: name });
});

export const ProductModel = model(
  "Users",
  UsersModel,
  collectionName
);