import INota from '../interfaces/INota';
import IResponseAPI from '../interfaces/IResponseApi';

export default async function cudNota(
  body: INota,
  method: 'POST' | 'PUT' | 'DELETE',
): Promise<IResponseAPI<INota | null>> {
  try {
    const res = await fetch(
      `${process.env.API_URL}/notas/${body.id || body.id === 0 ? body.id : ''}`,
      {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    );

    if (!res.ok) {
      throw new Error('Erro ao atualizar nota');
    }

    return (await res.json()) as IResponseAPI<INota>;
  } catch (error) {
    if (error instanceof Error) {
      return {message: error.message, data: null};
    } else return {message: 'Erro nao catalogado', data: null};
  }
}
