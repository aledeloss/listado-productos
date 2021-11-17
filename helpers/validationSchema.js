const Joi = require('@hapi/joi');

const productValidationSchema = Joi.object({
  category: Joi.string()
    .valid(
      'Motherboard',
      'Refrigeración',
      'Microprocesadores',
      'Fuentes de alimentación',
      'Adaptadores',
      'Cables',
      'Memoria RAM',
      'Monitores',
      'Placas de video',
      'Discos de almacenamiento',
      'Accesorios',
      'Estructuras'
    )
    .required(),
  trademark: Joi.string().required(), //
  name: Joi.string().required(),
  price: Joi.number().required(), // dos decimales y positivo
  status: Joi.string()
    .valid('En stock', 'Sin stock', 'Preventa', 'No disponible') // Consultar por No disponible
    .required(),
  stock: Joi.number().integer().min(0).required(), // uno de los campos
  enabled: Joi.bool(),
});

const orderValidationSchema = Joi.object({
  cliente_id: Joi.string().required(),
  items: Joi.array().required(),
  date: Joi.date(),
  status: Joi.string().valid('en camino', 'cancelado', 'entregado').required(),
  enabled: Joi.boolean().required(),
});

module.exports = {
  productValidationSchema,
  orderValidationSchema,
};
