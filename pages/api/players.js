// pages/api/Players.js
import {sendMethodNotAllowed, sendOk,} from '@/js/utils/apiMethods.js';
import {getCollection} from "@/js/utils/functions";
import {ObjectId,} from 'mongodb';
const COLLECTION_NAME = 'players';

const getPlayers = async () => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.find({}).toArray();
}

const getPlayer = async (id) => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.findOne({_id: new ObjectId(id)});
}

const postPlayer = async (player) => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.insertOne(player);
}

const putPlayer = async (player) => {
	const collection = await getCollection(COLLECTION_NAME);
	const id = player._id;
	delete player._id;
	return collection.updateOne({_id: new ObjectId(id)}, {$set: player});
}

const deletePlayer = async (id) => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.deleteOne({_id: new ObjectId(id)});
}

export default async function handler(req, res) {

	const isAllowedMethod = req.method === 'GET' || req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE';
	if(!isAllowedMethod) {
		return sendMethodNotAllowed(res);
	}

	if(req.method === 'GET' && req.query.id) {
		const id = req.query.id;
		const Player = await getPlayer(id);
		return sendOk(res, Player);
	}
	else if(req.method === 'GET') {
		const Players = await getPlayers();
		return sendOk(res, Players);
	}
	else if(req.method === 'POST') {
		const Player = req.body;
		const result = await postPlayer(Player);
		return sendOk(res, result);
	}
	else if(req.method === 'PUT') {
		const Player = req.body;
		const result = await putPlayer(Player);
		return sendOk(res, result);
	}
	else if(req.method === 'DELETE') {
		const id = req.query.id;
		const result = await deletePlayer(id);
		return sendOk(res, result);
	}
}