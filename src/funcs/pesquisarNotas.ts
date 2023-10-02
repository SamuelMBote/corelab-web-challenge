import INota from '../interfaces/INota';
import IResponseAPI from '../interfaces/IResponseApi';
import {TCores} from '../interfaces/TCores';

export default async function pesquisarNotas(
  textoAPesquisar: string,
  cores: TCores[],
): Promise<IResponseAPI<INota[] | null>> {
  let URL = `${process.env.API_URL}/notas/`;
  if (textoAPesquisar.length > 0 && cores.length > 0) {
    URL = `${process.env.API_URL}/notas/?pesquisa=${textoAPesquisar}&cores=${[
      ...cores,
    ]}`;
  } else if (textoAPesquisar.length > 0 && cores.length <= 0) {
    URL = `${process.env.API_URL}/notas/?pesquisa=${textoAPesquisar}`;
  } else if (textoAPesquisar.length <= 0 && cores.length > 0) {
    URL = `${process.env.API_URL}/notas/?cores=${[...cores]}`;
  } else {
    URL = `${process.env.API_URL}/notas/`;
  }

  try {
    const res = await fetch(URL, {
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
