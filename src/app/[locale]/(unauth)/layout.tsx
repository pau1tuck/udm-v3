import Link from "next/link";
import { useTranslations } from "next-intl";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import { BaseTemplate } from "@/templates/BaseTemplate";

export default function Layout(props: { children: React.ReactNode }) {
    const t = useTranslations("RootLayout");

    return (
        <BaseTemplate
            leftNav={
                <li>
                    <Link
                        href="/"
                        className="border-none text-gray-700 hover:text-gray-900"
                    />
                </li>
            }
            rightNav={
                <>
                    <li className="pt-1">
                        <Link
                            href="/sign-in/"
                            className="border-none text-gray-700 hover:text-gray-900"
                        >
                            {t("sign_in_link")}
                        </Link>
                    </li>

                    <li className="pt-1">
                        <Link
                            href="/sign-up/"
                            className="border-none text-gray-700 hover:text-gray-900"
                        >
                            {t("sign_up_link")}
                        </Link>
                    </li>

                    <li>
                        <LocaleSwitcher />
                    </li>
                </>
            }
        >
            <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
        </BaseTemplate>
    );
}
