

const Footer = () => {
    return (
        <footer className=" container mx-auto flex justify-between  bottom-0 mt-32">
            <div className="font-bold text-3xl">
                <h1>Logo</h1>
            </div>
            <div className=" text-center md:text-left">
                <ul className="space-y-[40px] font-medium ">
                    <li className="font-semibold">Company</li>
                    <li className="mt-4">About</li>
                    <li className="mt-4">Freature</li>
                    <li className="mt-4">works</li>
                    <li className="mt-4">People</li>
                </ul>
            </div>
            <div>
                <input className="border border-gray-600 p-3 " type="text" name="" id="" /> <br /><br />
                <button className="border-2 rounded-lg px-4 py-2 font-medium ">Subscribe now</button>
            </div>
        </footer>
    );
};

export default Footer;