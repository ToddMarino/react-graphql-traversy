import { gql } from '@apollo/client'

// look back at schema for more information on the setup
// status has a type of GraphQLEnumType with a name of status and values: new, progress, completed
const ADD_PROJECT = gql`
	mutation addProject(
		$name: String!
		$description: String!
		$status: ProjectStatus
		$clientId: ID!
	) {
		addProject(
			name: $name
			description: $description
			status: $status
			clientId: $clientId
		) {
			id
			name
			description
			status
			client {
				id
				name
				email
				phone
			}
		}
	}
`

const UPDATE_PROJECT = gql`
	mutation updateProject(
		$id: ID!
		$name: String!
		$description: String!
		$status: ProjectStatusUpdate!
	) {
		updateProject(
			id: $id
			name: $name
			description: $description
			status: $status
		) {
			id
			name
			description
			status
			client {
				id
				name
				email
				phone
			}
		}
	}
`

const DELETE_PROJECT = gql`
	mutation deleteProject($id: ID!) {
		deleteProject(id: $id) {
			id
		}
	}
`
export { ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT }
