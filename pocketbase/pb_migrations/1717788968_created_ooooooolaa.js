/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "erd6j8d25s2x8ns",
    "created": "2024-06-07 19:36:08.769Z",
    "updated": "2024-06-07 19:36:08.769Z",
    "name": "ooooooolaa",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dylopio9",
        "name": "uhyeah",
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
  const collection = dao.findCollectionByNameOrId("erd6j8d25s2x8ns");

  return dao.deleteCollection(collection);
})
