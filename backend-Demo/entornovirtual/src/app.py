from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from flask import Flask, jsonify, request

application= Flask(__name__)

#Cadena de conexion con la base de datos de mongodb
application.config['MONGO_URI'] = 'mongodb+srv://kjquito18:kjquito18@cluster0.7jgwkpw.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongo = PyMongo(application)
#Requerimiento de CORS
CORS(application)

#Metodo para crear la API de personas
@application.route('/personas', methods=['POST'])
def create_personas():
    # Receiving Data
    id = mongo.db.personas.insert_one ({
        'names' : request.json['names'],
        'lastNames' : request.json['lastNames'],
        'age' : request.json['age'],
        'address' : request.json['address'],
        'phone' : request.json['phone'],
        'email' : request.json['email']

    })    
    return jsonify(({'msg':'Registro creado con exito'}))
    
#Metodo para listar los datos de las personas registradas
@application.route('/personas', methods=['GET'])
def get_personas():
    persons = []
    for doc in mongo.db.personas.find():
        persons.append({
            '_id' : str (ObjectId(doc['_id'])),
            'names': doc['names'],
            'lastNames': doc['lastNames'],
            'age': doc['age'],
            'address': doc['address'],
            'phone' : doc['phone'],
            'email' : doc[ 'email']
        })
    return jsonify(persons)

#Metodo para listar los datos de una persona segun el ID
@application.route('/personas/<id>', methods=['GET'])
def get_persona(id):
    persons = mongo.db.personas.find_one({'_id':  ObjectId(id)})
    return jsonify(
        {
            '_id' : str (ObjectId(persons['_id'])),
            'names': persons['names'],
            'lastNames': persons['lastNames'],
            'age': persons['age'],
            'address': persons['address'],
            'phone' : persons['phone'],
            'email' : persons[ 'email']
        }
    )

#Metodo para eliminar un registro de una persona
@application.route ('/personas/<id>', methods=['DELETE'])
def delete_persona(id):
    mongo.db.personas.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg':'Persona Eliminada'})


#Metodo para actulizar los datos de una persona
@application.route('/personas/<id>', methods = ['PUT'])
def update_persona(id):
    mongo.db.personas.update_one({'_id': ObjectId(id)}, {'$set':{
        'names': request.json['names'],
        'lastNames': request.json['lastNames'],
        'age': request.json['age'],
        'address': request.json['address'],
        'phone': request.json['phone'],
        'email': request.json['email']
    }})
    return jsonify({'msg': 'Persona Actualizada'})

if __name__ == "__main__":
    application.run(debug=True)