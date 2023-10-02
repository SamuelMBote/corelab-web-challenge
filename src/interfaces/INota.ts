import {TCores} from './TCores';

export default interface INota {
  id?: number;
  favorito: boolean;
  titulo: string;
  texto: string;
  cor: TCores;
}
