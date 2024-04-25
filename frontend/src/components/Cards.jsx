import Card from "./Card";
import { useQuery } from "@apollo/client";
import { GET_TRANSACTIONS } from "../graphql/queries/transaction.query";

const Cards = () => {
	const { data, loading } = useQuery(GET_TRANSACTIONS);

	console.log("cards:", data);

	// TODO => ADD RELATIONSHIPS
	return (
		<div className='w-full px-10 min-h-[40vh]'>
			<p className='text-5xl font-bold text-center mt-10'>History</p>
			<div className='relative mt-1 mb-10 lg:w-1/2 w-full mx-auto hidden md:block'>
				{/* Gradients */}
				<div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-[2px] w-3/4 blur-sm' />
				<div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-px w-3/4' />
				<div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-400 to-transparent h-[5px] w-1/4 blur-sm' />
				<div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-400 to-transparent h-px w-1/4' />
			</div>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-start mb-20'>
				{!loading &&
					data.transactions.map((transaction) => <Card key={transaction._id} transaction={transaction} />)
				}
			</div>
			{!loading && data?.transactions?.length === 0 && (
				<p className='text-2xl font-bold text-center w-full'>No transaction history found.</p>
			)}
		</div>
	);
};
export default Cards;