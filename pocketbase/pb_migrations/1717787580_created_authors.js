/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "j5p7fgndm1ko4ri",
    "created": "2024-06-07 19:13:00.279Z",
    "updated": "2024-06-07 19:13:00.279Z",
    "name": "authors",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yhyhd8dv",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("j5p7fgndm1ko4ri");

  return dao.deleteCollection(collection);
})
