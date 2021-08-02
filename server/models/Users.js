module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define("Users", {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	});

	Users.associte = (models) => {
		Users.hasMany(models.Posts, {
			onDelete: "cascade",
		});
	};

	return Users;
};