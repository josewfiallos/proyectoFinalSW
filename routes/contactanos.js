var express = require("express");
var routes = express.Router();

module.exports = function(){

routes.get('/', function(req,res,next){
  res.render('contactanos', { nombre1: 'Jose Wilson Fiallos Sierra', nombre2:'Jordy Alexander Palencia Bustamante', nombre3:'Rafael Eduardo Fonseca Trochez ', nombre4:'Ricardo Alí Mendoza Molina' });
  });

  return routes;
};
