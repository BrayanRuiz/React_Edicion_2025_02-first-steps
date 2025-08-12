

export function MyAwesomeApp() {

    const firstName = 'Brayan';
    const lastName = 'Ruiz';

    const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];

    const isActive = true;

    const address = {
        zipCode: 53534,
        city: "Monterrey",
    }

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? 'Activo' : 'Inactivo'}</h1>

            <p
                style={{ backgroundColor: 'red', }}
            >{JSON.stringify(address)}</p>
        </>
    );
};