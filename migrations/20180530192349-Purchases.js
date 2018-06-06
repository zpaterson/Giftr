'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('Purchases', {
    id: { type: 'int', primaryKey: true },
    product_id: {
      type: 'int',
      foreignKey: {
        name: 'product_id_fk',
        table: 'Products',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        // mapping is the name in the table
        mapping: 'id'
      }
    },
    user_id: {
      type: 'int',
      foreignKey: {
        name: 'user_id_fk',
        table: 'Users',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    },
    recipient_id: {
      type: 'int',
      foreignKey: {
        name: 'recipient_id_fk',
        table: 'Recipients',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    }
  }, callback);
  return null;
};

exports.down = function(db) {
  return db.dropTable('Purchases');
  // return null;
};

exports._meta = {
  "version": 1
};
