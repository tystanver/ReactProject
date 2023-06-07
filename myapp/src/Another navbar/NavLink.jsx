

const NavLink = () => {
    const links = [
        { n: 'Men', id: 1 },
        { n: 'Kids', id: 2 },
        { n: 'Women', id: 3 },
        { n: 'Mature', id: 4 }

    ]
    return (
        <>
            {
                links.map(link => <li key={link.id}>{link.n}</li>)
            }
        </>
    );
};

export default NavLink;