import Sidebar from "@/components/sidebar/sidebar";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const logo = "/logo.png"
    return (
        <>
        <section className="w-full">
            <Sidebar image={logo}>
                {children}
            </Sidebar>
        </section>
        </>
    );
}