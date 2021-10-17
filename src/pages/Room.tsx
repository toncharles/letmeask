import {useParams} from 'react-router-dom';
import '../styles/room.scss';
import { Button } from '../components/Button';
import logoImg from '../assets/images/logo.svg';
import { RoomCode } from '../components/RoomCode';

type RoomParams = {
  id: string;
}

export function Room() {
  const params = useParams<RoomParams>();

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={params.id} />
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala React</h1>
          <span>5 perguntas</span>
        </div>

        <form>
          <textarea 
            placeholder= "o que voce quer perguntar?" 
          />
          <div className="form-footer">
            <span>Para enviar uma pergunta, <button>faca seu login</button>.</span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
}