<<<<<<< HEAD
const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Usuario extends Model {}
=======
const sequelize = require("../db");
const { Model, DataTypes } = require("sequelize");

class Usuario extends Model {}

>>>>>>> baef6a1 (correcting errors)
Usuario.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
<<<<<<< HEAD
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo_electronico: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true
=======
    DNI:{
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo DNI no puede ser nulo"
            },
            len: {
                args: [9, 20],
                msg: "El campo DNI debe tener entre 8 y 20 caracteres"
            }
        }
    },
    nombre: {
        type: DataTypes.STRING(50), 
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo nombre no puede ser nulo"
            },
            len: {
                args: [2, 50],
                msg: "El campo nombre debe tener entre 2 y 50 caracteres"
            }
        }
    },
    apellidos: {
        type: DataTypes.STRING(50), 
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo apellidos no puede ser nulo"
            },
            len: {
                args: [2, 50],
                msg: "El campo apellidos debe tener entre 2 y 50 caracteres"
            }
        }
    },
    correo_electronico: {
        type: DataTypes.STRING(100), 
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: "El campo correo_electronico no puede ser nulo"
            },
            isEmail: {
                msg: "El campo correo_electronico debe ser una dirección de correo electrónico válida"
            }
        }
    },
    direccion_usuario: {
        type: DataTypes.STRING(255), 
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo direccion_usuario no puede ser nulo"
            }
        }
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo contraseña no puede ser nulo"
            },
            len: {
                args: [6, 255], 
                msg: "El campo contraseña debe tener al menos 6 caracteres"
            }
        }
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isIn: {
                args: [["admin", "cliente"]],
                msg: "El campo rol debe ser uno de 'admin' o 'cliente'"
            }
        }
    },
    telefono: {
        type: DataTypes.STRING(20), 
        allowNull: true,
        validate: {
            len: {
                args: [9, 20],
                msg: "El campo telefono debe tener entre 9 y 20 caracteres"
            }
        }
>>>>>>> baef6a1 (correcting errors)
    }
}, {
    sequelize,
    modelName: "usuario",
    timestamps: false,
    freezeTableName: true
});

<<<<<<< HEAD
module.exports = Usuario;
=======
module.exports = Usuario;
>>>>>>> baef6a1 (correcting errors)
