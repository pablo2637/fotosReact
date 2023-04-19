
export const pexels = async (categoria) => {

    const apiKey = 'UNKzOtpVQmZPH1RmcMGcCKQB2VBBvuKt6AVw9Ory7q3sxxlzciyLhDo3';
    const url = `https://api.pexels.com/v1/search?query=${categoria}`;

    const options = {
        method: 'GET',
        headers: { authorization: apiKey },
        mode: 'cors',
        cache: 'force-cache'
    };

    try {

        const request = await fetch(url, options);

        if (request.ok) {
            const response = await request.json();

            return response

        } else {

            throw {
                ok: false,
                data: "error"
            };
        }

    } catch (e) {
        console.log('errorFetch', e)

    };

};