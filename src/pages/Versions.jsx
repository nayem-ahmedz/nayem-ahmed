function Versions(){
    const versions = [
        { version: '2.0.0', date: '16 August 2025', changes: ['Added Dark Mode', 'Redefined UI'] },
        { version: '1.7.0', date: '23 Feb 2025', changes: ['Moved to vite from CRA'] },
        { version: '1.5.0', date: '1 Nov 2024', changes: ['Converted into React App from HTML & CSS only website'] },
        { version: '1.0.0', date: '6 Sep 2024', changes: ['Initial Release : Nayem\'s Portfolio'] }
    ];
    return(
        <section className='version'>
            <h2 className='section-title text-center'>A snapshot of major changes</h2>
            <ul className='version-list'>
                {
                    versions.map((element) =>{
                        return(
                            <li key={element.version}>
                                <h3> {element.version} </h3> ---- {element.date}
                                <ul className="changes-list">
                                    {
                                        element.changes.map((item, index) => <li key={index}>{item}</li>)
                                    }
                                </ul>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
}

export default Versions;