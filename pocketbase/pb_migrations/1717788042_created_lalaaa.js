/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y85b6cyn7czlclj",
    "created": "2024-06-07 19:20:42.267Z",
    "updated": "2024-06-07 19:20:42.267Z",
    "name": "lalaaa",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "75p0ujm4",
        "name": "oof",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y85b6cyn7czlclj");

  return dao.deleteCollection(collection);
})
