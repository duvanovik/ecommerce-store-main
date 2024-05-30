import BillboardPage from '@/components/ui/billboard';
import Container from '@/components/ui/container';
import ProductList from '@/components/product-list';
import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';

export const revalidate = 0;

const HomePage = async () => {
	const billboard = await getBillboard(process.env.NEXT_PUBLIC_BILLBOARD_ID!);
	const products = await getProducts({ isFeatured: true });

	return (
		<Container>
			<div className="space-yt-10 pb-10">
				<BillboardPage data={billboard} />
				<div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
					<ProductList title="Featured Products" items={products} />
				</div>
			</div>
		</Container>
	);
};

export default HomePage;
