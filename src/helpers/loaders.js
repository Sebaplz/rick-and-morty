export const loaderCharacterInfo = async ({ params }) => {
  const data = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  if (!data.ok) {
    const errorResponseData = await data.json();
    const errorResponse = {
      status: data.status,
      statusText: errorResponseData.error,
    };
    throw errorResponse;
  }

  const characterInfo = await data.json();
  return { characterInfo };
};
