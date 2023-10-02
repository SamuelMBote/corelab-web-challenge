import INota from '../interfaces/INota';
import IResponseAPI from '../interfaces/IResponseApi';

export default async function todasNotas(): Promise<
  IResponseAPI<INota[] | null>
> {
  try {
    const res = await fetch(`${process.env.API_URL}/notas/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error('Erro ao buscar notas');
    }
    return (await res.json()) as IResponseAPI<INota[]>;
  } catch (error) {
    if (error instanceof Error) {
      return {message: error.message, data: null};
    } else return {message: 'Erro nao catalogado', data: null};
  }
}
