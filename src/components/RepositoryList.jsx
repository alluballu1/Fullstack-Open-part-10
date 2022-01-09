import React from 'react';
import { FlatList, View, StyleSheet, Image } from 'react-native';
import Text from './Text';


const repositories = [
	{
		id: 'jaredpalmer.formik',
		fullName: 'jaredpalmer/formik',
		description: 'Build forms in React, without the tears',
		language: 'TypeScript',
		forksCount: 1589,
		stargazersCount: 21553,
		ratingAverage: 88,
		reviewCount: 4,
		ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
	},
	{
		id: 'rails.rails',
		fullName: 'rails/rails',
		description: 'Ruby on Rails',
		language: 'Ruby',
		forksCount: 18349,
		stargazersCount: 45377,
		ratingAverage: 100,
		reviewCount: 2,
		ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
	},
	{
		id: 'django.django',
		fullName: 'django/django',
		description: 'The Web framework for perfectionists with deadlines.',
		language: 'Python',
		forksCount: 21015,
		stargazersCount: 48496,
		ratingAverage: 73,
		reviewCount: 5,
		ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
	},
	{
		id: 'reduxjs.redux',
		fullName: 'reduxjs/redux',
		description: 'Predictable state container for JavaScript apps',
		language: 'TypeScript',
		forksCount: 13902,
		stargazersCount: 52869,
		ratingAverage: 0,
		reviewCount: 0,
		ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
	},
];

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
	languageStyle: {
		backgroundColor: "#0366d6",
		padding: 5,
		alignSelf: "flex-start",
		marginTop: 10,
		borderRadius: 5,
		color: "white"
	}
  
});

const ItemSeparator = () => <View style={styles.separator} />;


const RepositoryList = () => {
	return (
		<FlatList
			data={repositories}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item, index }) => (
				<View style={{ backgroundColor: "white", padding: 10 }} key={index}>
					<View style={{ display:"flex"}}>

						<View style={{ flexDirection: "row", width: "100%" }}>
							<Image style={{ width: 60, height: 60, borderRadius: 5 }} source={{ uri: item.ownerAvatarUrl }} />
							<View style={{ flexDirection: "column", padding: 5, width: "90%" }}>
								<Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.fullName}</Text>
								<Text style={{ marginTop: 10 }}>{item.description}</Text>
								<View>
									<Text style={styles.languageStyle} >{item.language}</Text>
								</View>
							</View>
						</View>

						<View style={{ flexDirection: "row", justifyContent:"space-evenly", width:"100%"}}>
							<View style={{ flexDirection: "column", alignItems:"center"}}>
								<Text fontWeight={"bold"}>{item.stargazersCount > 1000 ? Math.round(item.stargazersCount/100)/10 + 'k' : item.stargazersCount}</Text>
								<Text>Stars</Text>
							</View>

							<View style={{ flexDirection: "column", alignItems:"center" }}>
								<Text fontWeight={"bold"}>{item.forksCount > 1000 ? Math.round(item.forksCount/100)/10 + 'k' : item.forksCount}</Text>
								<Text>Forks</Text>
							</View>

							<View style={{ flexDirection: "column", alignItems:"center" }}>
								<Text fontWeight={"bold"}>{item.reviewCount > 1000 ? Math.round(item.stargazersCount/100)/10 + 'k' : item.reviewCount}</Text>
								<Text>Reviews</Text>
							</View>

							<View style={{ flexDirection: "column", alignItems:"center" }}>
								<Text fontWeight={"bold"}>{item.stargazersCount > 1000 ? Math.round(item.stargazersCount/1000)/10 + 'k' : null}</Text>
								<Text>Ratings</Text>
							</View>
						</View>
					</View>
				</View>
			)}
		/>
	);
};

export default RepositoryList;