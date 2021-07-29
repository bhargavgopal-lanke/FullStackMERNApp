module.exports = (sequelize, DataTypes) => {

	const Posts = sequelize.define("posts", {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		posttext: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
	});

	return Posts;
}