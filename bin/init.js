const Medecin = require("../model/mongodb/medecin");
const Account = require("../model/mongodb/account");
const crypto = require("../services/security/cryptoService");

module.exports = async () => {
    // Verifier si un utilisateur Admin existe deja
    const adminUser = await Account.findOne({ isAdmin: true });
    if(adminUser){
      console.log("Admin already axist !");
    } else {
      const newAdmin = new Account({
         username: process.env.ADMIN_USERNAME,
         password: crypto.encrypt(process.env.ADMIN_PASSWORD),
         fullname: "Operator",
         isAdmin: true,
      });
       const account = await newAdmin.save();
       const newMedecin = new Medecin({
          nom: process.env.NOM,
          prenom: process.env.PRENOM,
          email: process.env.EMAIL,
          telephone: process.env.TELEPHONE,
          sexe: process.env.GENRE,
          specialite: process.env.SPECIALITE,
          account: account._id
       });
       const medecin = await newMedecin.save();
       if(medecin){
          console.log("Admin is created !");
       }
    }
}
