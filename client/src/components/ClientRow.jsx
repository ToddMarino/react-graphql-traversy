import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_CLIENT } from '../mutations/clientMutations'
import { GET_CLIENTS } from '../queries/clientQueries'
import { GET_PROJECTS } from '../queries/projectQueries'

export default function ClientRow({ client }) {
	const [deleteClient] = useMutation(DELETE_CLIENT, {
		variables: { id: client.id },
		// simple update done by refetching the query. On larger projects, could hinder performance.
		refetchQueries: [{ query: GET_CLIENTS}, {query: GET_PROJECTS}]

		// other solution is to use the Apollo cache
		// into update function, pass in cache and set data to the response of deleteClient
		// deleteClient contains name, email, phone values
		// update(cache, { data: { deleteClient } }) {
		// 	get the results of GET_CLIENTS query from the cache
		// 	destructure response of GET_CLIENTS
		// 	const { clients } = cache.readQuery({ query: GET_CLIENTS })
		// 	use the cache object's writeQuery method to write to the cache
		// 	cache.writeQuery({
		// 		query: GET_CLIENTS,
		// 		set data to return from clients.filter each client where the id isn't the id of deleteClient
		// 		data: {
		// 			clients: clients.filter((client) => client.id !== deleteClient.id),
		// 		},
		// 	})
		// },
	})

	return (
		<tr>
			<td>{client.name}</td>
			<td>{client.email}</td>
			<td>{client.phone}</td>
			<td>
				<button className='btn btn-danger btn-sm' onClick={deleteClient}>
					<FaTrash />
				</button>
			</td>
		</tr>
	)
}
