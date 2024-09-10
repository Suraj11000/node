const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const CertificateType = sequelize.define('CertificateType', {
  category: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'certificate_types'
});

module.exports = CertificateType;
