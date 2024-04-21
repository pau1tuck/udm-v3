import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: { params: { locale: string } }) {
	const t = await getTranslations({
		locale: props.params.locale,
		namespace: "Index",
	});

	return {
		title: t("meta_title"),
		description: t("meta_description"),
	};
}

export default function Index() {
	return (
		<>
			<p>
				Explore our DogHole project for more information about{" "}
				<a
					className="text-blue-700 hover:border-b-2 hover:border-blue-700"
					href="https://github.com/ixartz/Next-js-Boilerplate"
				>
					Next.js Boilerplate
				</a>
				.
			</p>
			<p>
				Our sponsors&apos; exceptional support has made this project
				possible. Their services integrate seamlessly with the
				boilerplate, and we recommend trying them out.
			</p>
			<h2 className="mt-5 text-2xl font-bold">Sponsors</h2>
			<h2 className="mt-5 text-2xl font-bold">
				Boilerplate Code for Your Next.js Project with Tailwind CSS
			</h2>
		</>
	);
}
