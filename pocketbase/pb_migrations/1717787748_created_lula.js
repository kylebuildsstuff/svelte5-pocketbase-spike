/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wzrxfzk4b3hz7z4",
    "created": "2024-06-07 19:15:48.450Z",
    "updated": "2024-06-07 19:15:48.450Z",
    "name": "lula",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zdzokanp",
        "name": "ahem",
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
  const collection = dao.findCollectionByNameOrId("wzrxfzk4b3hz7z4");

  return dao.deleteCollection(collection);
})
