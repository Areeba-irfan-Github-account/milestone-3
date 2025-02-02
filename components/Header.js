const Header = () => {
    return (
        <header className="bg-gray-50">
            <div className="xl:container xl:mx-auto flex flex-cols items-center justify-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input type="text" 
                    className="bg-slate-100 rounded-lg text-black border border-black"
                    placeholder="Search..." />
                </div>
                <div className="shrink w-80 sm:order-2 ">
                    <a>Desgin</a>
                </div>
                <div className="w-96 order-3 flex justify-center">

                    <div className="flex gap-6 ">
                        <a>Facebook</a>
                        <a>Twitter</a>
                        <a>Youtube</a>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;
