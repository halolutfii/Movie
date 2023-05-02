import React from "react";
import { Footer } from "flowbite-react";

const Footers = () => {
    return(     
        <div>
            <Footer container={true}>
        <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
                <Footer.Brand
                href="https://flowbite.com"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IZIad1tePVKESueLv8MrIa1_-pCI8PhJhg&usqp=CAU"
                alt="LUTFLIX Logo"
                name="LUTFLIX"
                />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">
                    Flowbite
                    </Footer.Link>
                    <Footer.Link href="#">
                    Tailwind CSS
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">
                    Github
                    </Footer.Link>
                    <Footer.Link href="#">
                    Discord
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">
                    Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#">
                    Terms & Conditions
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
            </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
                href="#"
                by="LUTFI CAHYA NUGRAHA™"
                year={2023}
            />
            </div>
        </div>
        </Footer>
        </div>
    )
}

export default Footers;